import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router} from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  title : string|undefined ="Title";
  actualRoute : string = "";

  map = new Map([
    ["/tweets", "Welcome"],
    ["/search","Search"],
    ["/notif","Notifications"],
    ["/messages","Messages"],
  ]);

  constructor(private route: ActivatedRoute, private router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
          this.title = this.map.get(event.url);
          console.log(event.url);
      }
    });
   }

  ngOnInit(): void {
  }

}
