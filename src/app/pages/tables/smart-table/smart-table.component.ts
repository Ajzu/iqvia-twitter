import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableService } from '../../../@core/data/smart-table.service';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';


@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class SmartTableComponent {

  tweetStartDate : Date = new Date(2016,0,1);
  tweetEndDate : Date = new Date(2017,11,31);
  tweetDateRange : Date[];

  //Addon for date picker
  datePickerConfig : Partial<BsDatepickerConfig>;
  //Addon for twitter data
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'string',
      },
      stamp: {
        title: 'Stamp',
        type: 'string',
      },
      text: {
        title: 'Text',
        type: 'string',
      },
    },
  };

  twitterSource: LocalDataSource = new LocalDataSource();
  uniquelyTweetedSource: LocalDataSource = new LocalDataSource();
  reTweetedSource: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableService) {
    //this.getAllTweets();
    this.datePickerConfig = Object.assign({},
      {
        minDate: new Date(2016,0,1),
        maxDate: new Date(2017, 11, 31)
      });

    this.tweetDateRange=[this.tweetStartDate, this.tweetEndDate];
    }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  getAllTweets() {
    this.tweetStartDate = this.tweetDateRange[0];
    this.tweetEndDate = this.tweetDateRange[1];
    this.service.getTwitterTweets (this.tweetStartDate, this.tweetEndDate)
    .subscribe(
      (res : any) => {
        const twitterData = res;
        this.service.filterTweetsData();
        const uniquelyTweetedData = this.service.getUniquelyTweetedData();
        const reTweetedData = this.service.getReTweetedData();
        this.twitterSource.load(twitterData);
        this.uniquelyTweetedSource.load(uniquelyTweetedData);
        this.reTweetedSource.load(reTweetedData);
      });
  }

}
