import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
// import {HttpClient} from '@angular/common/http';
import postJson from "../assets/test.json";
import {tweetPost} from './interfaces/tweetInterface'

//to import json files in Angular you need to add 2 options in tsconfig.json :
//"resolveJsonModule": true  &   "allowSyntheticDefaultImports": true

// interface tweetPost {
//   id: number,
//   title: string,
//   url: string; 
// }

@Injectable({
  providedIn: 'root'
})
export class TweetsService {

  nthLastTweets:tweetPost[] = [];

  constructor() { }

  getTweets(nthLast: number) : Observable<tweetPost[]>{
    let i = 0;
    this.nthLastTweets = [];
    for (let post of postJson) {
      if (nthLast === i) break;
      this.nthLastTweets.push(post);
      i++;
    }
    console.log(this.nthLastTweets);
    const posts = of(this.nthLastTweets);
    return posts;
  }
}
