import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Request, RequestMethod, Response, URLSearchParams } from '@angular/http';
import { environment } from '../../../environments/environment'
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()
export class SmartTableService {

  private twitterBaseUrl = environment.twitterBaseUrl;
  private getTwitterHeaders = new Headers();

  constructor(
    private http : Http
    ) {
          this.getTwitterHeaders.append('Accept', 'text/plain');
    }
    private getTwitterOptions = new RequestOptions({ headers: this.getTwitterHeaders});

  twitterData2 = [{
        id: "976930413695438851",
        stamp: "2016-03-20T05:58:30.4218367+00:00",
        text: "Happy birthday to the one and only @BenWahBallz could bounce marvel theories and Anime awesomeness around with him… https://t.co/bjN4iT7JuY"
      },{
        id: "976930413695438851",
        stamp: "2016-03-24T03:02:53.5980204+00:00",
        text: "RT @Lbaini: Chau, Cap. Después de Avengers 4, Chris Evans se va de Marvel.\nQEPD https://t.co/BRDbgozfhu"
      },{
        id: "976936658800201728",
        stamp: "2016-03-24T03:42:49.2018045+00:00",
        text: "Marvel: “Infinity War is the most ambitious crossover event in History”\n\nMe: https://t.co/qroCDiXGda"
      },{
        id: "976930413695438851",
        stamp: "2016-03-24T03:50:10.938093+00:00",
        text: "RT @ComicBookNOW: The NEW #Deadpool2 trailer is here and it officially reveals the #XForce lineup! WATCH HERE: https://t.co/3I5oBjUg4k http…"
    },];

    twitterData = [];
    uniquelyTweetedData=[];
    reTweetedData=[];

  // getTwitterData(){
  //     console.log("Original Twitter Data", this.twitterData);
  //     return this.twitterData;
  // }

  getUniquelyTweetedData(){
      return this.uniquelyTweetedData;
  }

  getReTweetedData(){
      return this.reTweetedData;
  }

  filterTweetsData(){

    // debugger;
    //   this.twitterData2.filter((obj, pos, arr) => {
    //       return arr.map(mapObj => mapObj['id']).indexOf(obj['id']) === pos;
    //     });
    //       console.log("Filtered ID: ", this.twitterData2);

    //   debugger;
    //   var tempFilteredTwitter = this.twitterData2.filter((obj, pos, arr) => {
    //     debugger;
    //       var duplicateItem = arr.map(mapObj => mapObj['id']).indexOf(obj['id']) === pos;
    //         return duplicateItem;
    //     });
    //       console.log("Filtered ID: ", tempFilteredTwitter);
          
      for( let tweet of this.twitterData ){

          //tweet.id 
          //search tweet.id in entire twitterData and check for duplicates
          //tweet.id 

          if(tweet.text.indexOf("RT ") == -1 && tweet.id != null){

              this.uniquelyTweetedData.push(tweet);
          }
          else{
              this.reTweetedData.push(tweet);
          }
      }
  }

  getTwitterTweets( tableName : string ) : Observable< Response >{
    let url = this.twitterBaseUrl;

    return this
    .http
    .get(url, this.getTwitterOptions)
    .map((res : any) => {

        this.twitterData = res.json();
        return res.json();
    })
  }
}
