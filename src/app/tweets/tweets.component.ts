import { Component, OnInit } from '@angular/core';
import { TweetsService } from '../tweets.service';
import { tweetPost } from '../interfaces/tweetInterface';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.scss']
})
export class TweetsComponent implements OnInit {

  lastTweets: tweetPost[] = [];
  today: number = Date.now();
  todayH: number = Number(formatDate(Date.now(),'h','en-US'));


  constructor(private tweetServ: TweetsService) {
    this.tweetServ.getTweets(2)
    .subscribe(lastTweets => this.lastTweets = lastTweets);
    console.log(this.todayH);
   }

  ngOnInit(): void {

  }

}
