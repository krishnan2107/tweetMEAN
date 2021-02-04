import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Tweet} from "./tweet.model";
import {Observable} from "rxjs";
import {sentimentModel} from "./sentiment.model";


@Injectable({
  providedIn: 'root'
})
export class TweetService {
  tweets: Tweet[];
  sentimentModels: sentimentModel[];
  readonly baseURL = 'http://localhost:3200/tweets';

  constructor(private http: HttpClient) { }

  getTweet(): Observable<any>{
    return this.http.get<any>(this.baseURL);
  }

  getAgg(): Observable<any>{
    return this.http.get<any>(this.baseURL + '/count/agg');
  }
}
