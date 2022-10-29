import { Component, Input, OnInit } from '@angular/core';
import { RetainerService } from '../retainer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() title : string ="Title";

  constructor(private retainerService: RetainerService) { }

  ngOnInit(): void {
    // this.getTitle();
  }

  // getTitle():void {
  //   this.title = this.retainerService.getTitle();
  // }

}
