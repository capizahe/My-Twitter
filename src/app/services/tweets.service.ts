import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import { Tweet } from '../model/tweet';

@Injectable({
  providedIn: 'root'
})
export class TweetsService {

  TweetList : AngularFireList<any>;
  selectedTweet: Tweet = new Tweet();
  constructor(private firebase:AngularFireDatabase) { }

  getTweets(){
   return this.TweetList = this.firebase.list('tweets');
  }

  insertTweet(tweet:Tweet){
    this.TweetList.push({
      descripcion: tweet.descripcion,
      titulo: tweet.titulo
    });
  }
}
