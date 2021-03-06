import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video.service';
import { Video } from '../video';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  videos: Video[] = [];
  constructor(private videoService: VideoService) { }
  ngOnInit() {
    this.getVideos();
  }
  getVideos(): void {
    this.videoService.getVideos()
      .subscribe(videos => this.videos = videos.slice(0, 5));
  }

}
