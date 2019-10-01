import { Component, OnInit } from '@angular/core';
import { Tweet } from 'src/app/model/tweet';
import { TweetsService } from 'src/app/services/tweets.service';

@Component({
  selector: 'app-tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.css']
})
export class TweetListComponent implements OnInit {

  public tweets:Array<Tweet>;

  constructor(public tweetService:TweetsService) { }

  ngOnInit() {
    this.tweetService.getTweets()
    .snapshotChanges()
    .subscribe(tweets=>{
      this.tweets = new Array();
      tweets.forEach(tweet=>{
        var t = tweet.payload.toJSON()
        t["$key"] = tweet.key;
        this.tweets.push(t as Tweet);
      })
    })
  }

}
