import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit, OnDestroy {
	//videoList = ['item-1','item-2','item-3']
	//https://www.youtube.com/embed/{{ item.embed }}
	private req : any;
	videoList : [any];
	// videoList = [
	// 	{
	// 		name:'Item 1',
	// 		slug:'Item-1',
	// 		embed:'go-kjFnZzFM'
	// 	},
	// 	{
	// 		name:'Item 2',
	// 		slug:'Item-2',
	// 		embed:'qqLQqGcIDs8'
	// 	},
	// 	{
	// 		name:'Item 3',
	// 		slug:'Item-3',
	// 		embed:'go-kjFnZzFM'
	// 	}
	// ]
  constructor(private _http:Http) { }

  ngOnInit() {
  	this.req = this._http.get('assets/json/videos.json').subscribe(data => {
  		console.log(data.json());
  		this.videoList = data.json() as [any];
  	})
  }

  ngOnDestroy(){
  	this.req.unsubscribe()
  }

  getEmbedUrl(item){
  	return "https://www.youtube.com/embed/"+item.embed;
  }

}
