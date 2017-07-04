import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
	//videoList = ['item-1','item-2','item-3']
	//https://www.youtube.com/embed/{{ item.embed }}
	videoList = [
		{
			name:'Item 1',
			slug:'Item-1',
			embed:'go-kjFnZzFM'
		},
		{
			name:'Item 2',
			slug:'Item-2',
			embed:'qqLQqGcIDs8'
		},
		{
			name:'Item 3',
			slug:'Item-3',
			embed:'go-kjFnZzFM'
		}
	]
  constructor() { }

  ngOnInit() {
  }

  getEmbedUrl(item){
  	return "https://www.youtube.com/embed/"+item.embed;
  }

}
