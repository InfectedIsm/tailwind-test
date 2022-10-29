import { Component, Input } from '@angular/core';
import { RetainerService } from './retainer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title : string = "";

  constructor(private retainerService: RetainerService) {
    this.getPageTitle();
   }
  
  setPageTitle(title: string) : void {
    // this.retainerService.setTitle(title);
    this.title = title;
  }

  getPageTitle(): void {
    this.retainerService.getTitle()
      .subscribe(title => this.title = title);
  }



}