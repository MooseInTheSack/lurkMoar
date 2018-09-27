import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retry';
import 'rxjs/Rx';
/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class Api {
  url: string = 'https://example.com/api/v1';
  redditBase: string = 'https://reddit.com/';


  constructor(public http: HttpClient) {
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }

  get(endpoint: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }

    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params = reqOpts.params.set(k, params[k]);
      }
    }

    return this.http.get(this.url + '/' + endpoint, reqOpts);
  }

  post(endpoint: string, body: any, reqOpts?: any) {
    return this.http.post(this.url + '/' + endpoint, body, reqOpts);
  }

  put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.url + '/' + endpoint, body, reqOpts);
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(this.url + '/' + endpoint, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.patch(this.url + '/' + endpoint, body, reqOpts);
  }

  getRedditPosts(category, type, limit, after_name) {
    //type= top, new, etc.
    if(after_name !== null) {
      return this.http.get(this.redditBase + 'r/' + category + '/' + type + '.json?limit='+ limit + '&after=' + after_name)
        .map((response: any) => {
          return response.data.children;
        })
        .catch(this.handleError);

    } else {
      return this.http.get(this.redditBase + 'r/' + category + '/' + type + '.json?limit='+ limit)
        .map((response: any) => {
          console.log("response: ", response.data.children);
          return response.data.children;
        })
        .catch(this.handleError);

    }
    
  }

  getComments(url) {
    return this.http.get('https://www.reddit.com' + url + '.json');
  }       

  getSubreddits() {
    return this.http.get('http://www.reddit.com/reddits.json?limit=100');
  }

  getSubredditsLocally() {
    return [{ subreddit: "2007scape", icon: "trash"}, { subreddit: "4chan", icon: "ios-leaf"}, { subreddit: "AdviceAnimals", icon: "trash"}, { subreddit: "all", icon: "trash"}, { subreddit: "Android", icon: "logo-android"}, { subreddit: "anime", icon: "trash"}, { subreddit: "apple", icon: "logo-apple"}, { subreddit: "AskReddit", icon: "logo-reddit"}, { subreddit: "atheism", icon: "trash"}, { subreddit: "aww", icon: "trash"}, { subreddit: "baseball", icon: "baseball"}, { subreddit: "BigBrother", icon: "trash"}, { subreddit: "BlackPeopleTwitter", icon: "logo-tumblr"}, { subreddit: "BoJackHorseman", icon: "trash"}, { subreddit: "books", icon: "md-book"}, { subreddit: "canada", icon: "trash"}, { subreddit: "CFB", icon: "american-football"}, { subreddit: "ComedyCemetery", icon: "trash"}, { subreddit: "conspiracy", icon: "trash"}, { subreddit: "cscareerquestions", icon: "md-git-branch"}, { subreddit: "CrappyDesign", icon: "trash"}, { subreddit: "CringeAnarchy", icon: "trash"}, { subreddit: "cringepics", icon: "md-images"}, { subreddit: "dankmemes", icon: "trash"}, { subreddit: "dataisbeautiful", icon: "trash"}, { subreddit: "DestinyTheGame", icon: "trash"}, { subreddit: "DotA2", icon: "trash"}, { subreddit: "europe", icon: "logo-euro"}, { subreddit: "explainlikeimfive", icon: "trash"}, { subreddit: "american-football", icon: "trash"}, { subreddit: "FireEmblemHeroes", icon: "trash"}, { subreddit: "freefolk", icon: "trash"}, { subreddit: "funny", icon: "trash"}, { subreddit: "gameofthrones", icon: "trash"}, { subreddit: "Games", icon: "ios-game-controller-b"}, { subreddit: "gaming", icon: "ios-game-controller-b"}, { subreddit: "gifs", icon: "trash"}, { subreddit: "GlobalOffensive", icon: "trash"}, { subreddit: "hearthstone", icon: "trash"}, { subreddit: "hiphopheads", icon: "trash"}, { subreddit: "iamverysmart", icon: "md-bulb"}, { subreddit: "Ice_Poseidon", icon: "trash"}, { subreddit: "insanepeoplefacebook", icon: "logo-facebook"}, { subreddit: "interestingasfuck", icon: "trash"}, { subreddit: "Jokes", icon: "trash"}, { subreddit: "leagueoflegends", icon: "trash"}, { subreddit: "legaladvice", icon: "trash"}, { subreddit: "LiverpoolFC", icon: "trash"}, { subreddit: "LivestreamFail", icon: "trash"}, { subreddit: "magicTCG", icon: "trash"}, { subreddit: "me_irl", icon: "trash"}, { subreddit: "mildlyinteresting", icon: "trash"}, { subreddit: "MMA", icon: "trash"}, { subreddit: "movies", icon: "md-film"}, { subreddit: "Music", icon: "md-headset"}, { subreddit: "NatureIsFuckingLit", icon: "md-globe"}, { subreddit: "nba", icon: "basketball"}, { subreddit: "new", icon: "trash"}, { subreddit: "news", icon: "trash"}, { subreddit: "nfl", icon: "american-football"}, { subreddit: "NintendoSwitch", icon: "trash"}, { subreddit: "nottheonion", icon: "trash"}, { subreddit: "oddlysatisfying", icon: "trash"}, { subreddit: "OldSchoolCool", icon: "trash"}, { subreddit: "Overwatch", icon: "trash"}, { subreddit: "pcmasterrace", icon: "trash"}, { subreddit: "photoshopbattles", icon: "md-color-palette"}, { subreddit: "pics", icon: "md-camera"}, { subreddit: "PoliticalHumor", icon: "trash"}, { subreddit: "politics", icon: "trash"}, { subreddit: "PrequelMemes", icon: "trash"}, { subreddit: "ProgrammerHumor", icon: "logo-javascript"}, { subreddit: "PUBATTLEGROUNDS", icon: "trash"}, { subreddit: "Rainbow6", icon: "trash"}, { subreddit: "redorchestra", icon: "trash"}, { subreddit: "relationships", icon: "trash"}, { subreddit: "rickandmorty", icon: "md-flask"}, { subreddit: "rupaulsdragrace", icon: "trash"}, { subreddit: "science", icon: "md-flask"}, { subreddit: "Showerthoughts", icon: "trash"}, { subreddit: "soccer", icon: "md-football"}, { subreddit: "space", icon: "md-planet"}, { subreddit: "sports", icon: "basketball"}, { subreddit: "SquaredCircle", icon: "trash"}, { subreddit: "starterpacks", icon: "trash"}, { subreddit: "technology", icon: "trash"}, { subreddit: "television", icon: "trash"}, { subreddit: "thatHappened", icon: "trash"}, { subreddit: "The_Donald", icon: "trash"}, { subreddit: "tifu", icon: "trash"}, { subreddit: "Tinder", icon: "md-flame"}, { subreddit: "todayilearned", icon: "trash"}, { subreddit: "top", icon: "trash"}, { subreddit: "trashy", icon: "trash"}, { subreddit: "trees", icon: "trash"}, { subreddit: "TropicalWeather", icon: "trash"}, { subreddit: "tumblr", icon: "logo-tumblr"}, { subreddit: "TumblrInAction", icon: "trash"}, { subreddit: "UpliftingNews", icon: "trash"}, { subreddit: "videos", icon: "md-videocam"}, { subreddit: "wholesomememes", icon: "md-happy"}, { subreddit: "worldnews", icon: "trash"}, { subreddit: "wow", icon: "trash"}, { subreddit: "WTF", icon: "trash"}, { subreddit: "youtubehaiku", icon: "logo-youtube"}];
  }

  /*
  =======================
  ========4Chan=========
  =======================
  */
  getListOfBoards() {
    return this.http.get(`https://a.4cdn.org/boards.json`)
    
  }

  getBoardsLocally() {
    return [{board: "3", icon: "trash", description: "3D modeling and imagery"},{board: "a", icon: "trash", description: "Anime & Manga"},{board: "aco", icon: "trash", description: "Adult Cartoons"},{board: "adv", icon: "trash", description: "Advice"},{board: "an", icon: "trash", description: "Animals & Nature"},{board: "asp", icon: "trash", description: "Alternative Sports & Wrestling"},{board: "b", icon: "trash", description: "Random"},{board: "bant", icon: "trash", description: "/pol/ shitposts"},{board: "biz", icon: "trash", description: "Business"},{board: "c", icon: "trash", description: "Anime/Cute"},{board: "cgl", icon: "trash", description: "Cosplay & EGL"},{board: "ck", icon: "trash", description: "Food & Cooking"},{board: "cm", icon: "trash", description: "Cute/Male"},{board: "co", icon: "trash", description: "Comics & Cartoons"},{board: "d", icon: "trash", description: "Hentai/Alternative"},{board: "diy", icon: "trash", description: "Do It Yourself"},{board: "e", icon: "trash", description: "Ecchi"},{board: "f", icon: "trash", description: "Flash Files"},{board: "fa", icon: "trash", description: "Fashion"},{board: "fit", icon: "trash", description: "I know that feel bra"},{board: "g", icon: "trash", description: "Technology"},{board: "gd", icon: "trash", description: "Graphic Design"},{board: "gif", icon: "trash", description: "Adult GIF"},{board: "h", icon: "trash", description: "Hentai"},{board: "hc", icon: "trash", description: "Hardcore"},{board: "his", icon: "trash", description: "History & Humanities"},{board: "hm", icon: "trash", description: "Handsome Men"},{board: "hr", icon: "trash", description: "High Resolution"},{board: "i", icon: "trash", description: "Oekaki"},{board: "ic", icon: "trash", description: "Artwork/Critique"},{board: "int", icon: "trash", description: "International"},{board: "jp", icon: "trash", description: "Otaku (Weeaboo) Culture"},{board: "k", icon: "trash", description: "Weapons"},{board: "lgbt", icon: "trash", description: "LGBT"},{board: "lit", icon: "trash", description: "Literature"},{board: "m", icon: "trash", description: "Mecha"},{board: "mlp", icon: "trash", description: "Do not click this"},{board: "mu", icon: "trash", description: "Music"},{board: "n", icon: "trash", description: "Transportation"},{board: "news", icon: "trash", description: "Current News"},{board: "o", icon: "trash", description: "Auto"},{board: "out", icon: "trash", description: "Outdoors"},{board: "p", icon: "trash", description: "Photography"},{board: "po", icon: "trash", description: "Papercraft & Origami"},{board: "pol", icon: "trash", description: " is always right"},{board: "qa", icon: "trash", description: "Question & Answer"},{board: "qst", icon: "trash", description: "Quests"},{board: "r", icon: "trash", description: "Adult Requests"},{board: "r9k", icon: "trash", description: "Original Greentext Stories"},{board: "s", icon: "trash", description: "Sexy Beautiful Women"},{board: "s4s", icon: "trash", description: "Shit 4chan Says"},{board: "sci", icon: "trash", description: "Science & Math"},{board: "soc", icon: "trash", description: "Cams & Meetups"},{board: "sp", icon: "trash", description: "Sportsball"},{board: "t", icon: "trash", description: "Torrents"},{board: "tg", icon: "trash", description: "Traditional Games"},{board: "toy", icon: "trash", description: "Toys"},{board: "trash", icon: "trash", description: "Off-Topic"},{board: "trv", icon: "trash", description: "Travel"},{board: "tv", icon: "trash", description: "TV"},{board: "u", icon: "trash", description: "Yuri"},{board: "v", icon: "trash", description: "Video Games"},{board: "vg", icon: "trash", description: "Video Game Generals"},{board: "vip", icon: "trash", description: "Very Important Posts"},{board: "vp", icon: "trash", description: "Pokémon"},{board: "vr", icon: "trash", description: "Retro Games"},{board: "w", icon: "trash", description: "Anime/Wallpapers"},{board: "wg", icon: "trash", description: "Wallpapers/General"},{board: "wsg", icon: "trash", description: "Worksafe GIF"},{board: "wsr", icon: "trash", description: "Worksafe Requests"},{board: "x", icon: "trash", description: "Paranormal"},{board: "y", icon: "trash", description: "Yaoi"}];
  }

  getBoardByPage(board, page) {
    return this.http.get(`https://a.4cdn.org/${board}/${page}.json`)
  }

  getThread(board, threadnumber) {
    return this.http.get(`https://a.4cdn.org/${board}/thread/${threadnumber}.json`)
  }

  getThreads(board) {
    return this.http.get(`https://a.4cdn.org/${board}/threads.json`)
  }

  getArchivedThreads(board) {
    return this.http.get(`https://a.4cdn.org/${board}/archive.json`)
  }

  getThumbnail(board, tim, ext) {
    return this.http.get(`http://i.4cdn.org/${board}/${tim}${ext}`);
        
  }

  addBookmark(board, threadnumber) {

  }
/*
  getList() {
    try {
        return this.af.list('/items', {
            query: {
                limitToLast: 10,
                orderByKey: true
            }
        });
    } catch(e) {
        return e;
    }
  }

  addToList(newName) {
    const items = this.af.list('/items');
    items.push({ name: newName });
  }
*/
  get8ChanBoards() {
    return this.http.get(`https://8ch.net/boards.json`)
  }

  get8ChanBoardByPage(board, page) {
    return this.http.get(`https://8ch.net/${board}/${page}.json`)
  }

  get8ChanThread(board, threadnumber) {
    return this.http.get(`https://8ch.net/${board}/thread/${threadnumber}.json`)
  }

  get8ChanThreads(board) {
    return this.http.get(`https://8ch.net/${board}/threads.json`)
  }

  get8ChanArchivedThreads(board) {
    return this.http.get(`https://8ch.net/${board}/archive.json`)
  }

  //?
  get8ChanThumbnail(board, tim, ext) {
    return this.http.get(`http://8ch.net/${board}/${tim}${ext}`);
        
  }
  //?

  getLocalData() {
    return this.http.get('./assets/mock_data/fourchan_pol.json');
      
  }
}
