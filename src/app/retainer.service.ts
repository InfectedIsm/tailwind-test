import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RetainerService {

  constructor() { }

  title : string = "service"


  getTitle(): Observable<string> {
    const title = of(this.title);
    return title;
  }

  setTitle(title:string): void {
    this.title = title;
  }
}
