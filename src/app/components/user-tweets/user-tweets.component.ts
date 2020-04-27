import { Component, OnInit } from '@angular/core';
import { TweetComponent } from '../tweet/tweet.component';
import { Tweet } from 'src/app/model/tweet';
import { TweetsService } from 'src/app/services/tweets.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-tweets',
  templateUrl: './user-tweets.component.html',
  styleUrls: ['./user-tweets.component.css']
})
export class UserTweetsComponent implements OnInit {

  tweets : Tweet[]

  constructor(public postService:TweetsService,public authService:AuthService) { }

  ngOnInit() {
    if(this.authService.isLoggedIn){
    this.postService.getTweetsByUser(localStorage.getItem('email'))
    .snapshotChanges()
    .subscribe(tweets=>{
      this.tweets = new Array(tweets.length);
      let i = tweets.length-1;
      tweets.forEach(tweet=>{
        var t = tweet.payload.toJSON()
        t["$key"] = tweet.key;
        this.tweets[i] = (t as Tweet);
        i--;
      }) 
    })
  }
  }
}
