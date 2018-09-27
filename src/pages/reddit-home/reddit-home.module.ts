import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RedditHomePage } from './reddit-home';

@NgModule({
  declarations: [
    RedditHomePage,
  ],
  imports: [
    IonicPageModule.forChild(RedditHomePage),
  ],
})
export class RedditHomePageModule {}
