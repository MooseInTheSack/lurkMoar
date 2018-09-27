import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RedditPostsPage } from './reddit-posts';

@NgModule({
  declarations: [
    RedditPostsPage,
  ],
  imports: [
    IonicPageModule.forChild(RedditPostsPage),
  ],
})
export class RedditPostsPageModule {}
