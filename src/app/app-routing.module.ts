import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TweetboardComponent} from './tweetboard/tweetboard.component';
import {TweetpieComponent} from './tweetpie/tweetpie.component';

const routes: Routes = [
  {path: 'tweet-graph', component: TweetpieComponent},
  {path: 'tweet-board', component: TweetboardComponent},
  {path: '', redirectTo: '/tweet-graph', pathMatch:'full'}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
