import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RedditPostPage } from './reddit-post';

@NgModule({
  declarations: [
    RedditPostPage,
  ],
  imports: [
    IonicPageModule.forChild(RedditPostPage),
  ],
})
export class RedditPostPageModule {}
