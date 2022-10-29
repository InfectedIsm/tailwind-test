import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TweetsComponent } from './tweets/tweets.component';
import { SearchComponent } from './search/search.component';
import { NotifComponent } from './notif/notif.component';
import { MessagesComponent } from './messages/messages.component';

const routes: Routes = [
  {path: 'tweets', component: TweetsComponent},
  {path: 'search', component: SearchComponent},
  {path: 'notif', component: NotifComponent},
  {path: 'messages', component: MessagesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
