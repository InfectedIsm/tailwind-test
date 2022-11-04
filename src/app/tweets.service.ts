import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs';

import {HttpClient} from '@angular/common/http';

import tweetJson from "../assets/tweets.json";
import {tweetPost} from './interfaces/tweetInterface'
import {gasTracker} from './interfaces/gasInterface'

  export interface config {
    fast: number;
    average: number;
  }


//to import json files in Angular you need to add 2 options in tsconfig.json :
//"resolveJsonModule": true  &   "allowSyntheticDefaultImports": true

@Injectable({
  providedIn: 'root'
})
export class TweetsService {


  nthLastTweets:tweetPost[] = [];
  datas :gasTracker|undefined;

  constructor(private http: HttpClient) {
    this.http.get<gasTracker>("https://ethgasstation.info/api/ethgasAPI.json?", {observe: 'response'})
      .subscribe(datas => this.datas = {...datas});
      console.log(this.datas);
   }


  getTweets(nthLast: number) : Observable<tweetPost[]>{
    let i = 0;
    this.nthLastTweets = [];
    for (let post of tweetJson) {
      if (nthLast === i) break;
      this.nthLastTweets.push(post);
      i++;
    }

    console.log(this.nthLastTweets);
    const posts = of(this.nthLastTweets);
    return posts;
  }

  getGas():number {
    console.log(this.http.get("https://ethgasstation.info/api/ethgasAPI.json?"));

    return 0;
  }
}
