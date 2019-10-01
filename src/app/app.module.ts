import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TweetComponent } from './components/tweet/tweet.component';
import { TweetListComponent } from './components/tweet-list/tweet-list.component';
import { CreateTweetComponent } from './components/create-tweet/create-tweet.component';

//firebase
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from '../environments/environment';
import  {FormsModule} from '@angular/forms'

//services
import {TweetsService} from './services/tweets.service';

@NgModule({
  declarations: [
    AppComponent,
    TweetComponent,
    TweetListComponent,
    CreateTweetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [TweetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
