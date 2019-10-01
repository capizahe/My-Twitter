import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TweetListComponent } from './components/tweet-list/tweet-list.component';
import { CreateTweetComponent } from './components/create-tweet/create-tweet.component';


const routes: Routes = [
  { path: 'tweets', component: TweetListComponent,},
  { path: 'create', component: CreateTweetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
