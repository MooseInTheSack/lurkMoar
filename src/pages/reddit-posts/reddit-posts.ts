import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Api } from '../../providers/api/api';

/**
 * Generated class for the RedditPostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reddit-posts',
  templateUrl: 'reddit-posts.html',
})
export class RedditPostsPage {

  posts: Array<any>;
  subreddit: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, private api: Api) {
    this.subreddit = navParams.get('subreddit') || "all";

    console.log("this.subreddit => ", this.subreddit);

    this.api.getRedditPosts(this.subreddit, "hot", 25, null)
    .subscribe(
      response => { 
        console.log('Observer got a next value: ' + response);
        this.posts = response;
      },
      err => { console.error('Observer got an error: ' + err) },
      () => { console.log('Observer got a complete notification') }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RedditPostsPage');
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: any) {
    this.navCtrl.push('RedditPostPage', {
      data: item
    });
  }

}
