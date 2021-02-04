import { Component, OnInit } from '@angular/core';
import {TweetService} from "../Shared/tweet.service";
import {Tweet} from "../Shared/tweet.model";

@Component({
  selector: 'app-tweetboard',
  templateUrl: './tweetboard.component.html',
  styleUrls: ['./tweetboard.component.css'],
  providers: [TweetService]
})

export class TweetboardComponent implements OnInit {
  totalRecords:number;
  pageNumber = 1;

  constructor(public tweetService: TweetService) { }

  ngOnInit(): void {
    this.refreshTweetList();
  }
  refreshTweetList(): void{
    this.tweetService.getTweet().subscribe((res) => {
      this.tweetService.tweets = res as Tweet[];
      this.totalRecords = this.tweetService.tweets.length;
      console.log(this.totalRecords);
    });
  }

}
