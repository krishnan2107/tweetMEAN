import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TweetboardComponent } from './tweetboard/tweetboard.component';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { TweetpieComponent } from './tweetpie/tweetpie.component';
import {ChartsModule} from "ng2-charts";
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TweetboardComponent,
    TweetpieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    ChartsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
