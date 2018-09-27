import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Api } from '../../providers/api/api';

/**
 * Generated class for the RedditHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reddit-home',
  templateUrl: 'reddit-home.html',
})
export class RedditHomePage {

  posts: Array<any>;
  subreddits: Array<Object>;
  fav_subreddits: Array<Object>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private api: Api) {

    this.subreddits = this.api.getSubredditsLocally();
    this.fav_subreddits = [{ subreddit: "funny"}, {subreddit: "pics"}];
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RedditHomePage');
  }

  /**
   * Navigate to the detail page for this item.
   */
  goToSub(item: any) {
    console.log("item in reddit-home.ts", item.subreddit );
    this.navCtrl.push('RedditPostsPage', {
      subreddit: item
    });
  }

}
