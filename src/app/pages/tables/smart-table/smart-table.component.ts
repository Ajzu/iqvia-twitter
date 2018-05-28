import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableService } from '../../../@core/data/smart-table.service';

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
    this.getAllTweets();
    //const twitterData = this.service.getTwitterTweets ('GetAllUser')
    //const twitterData =  this.service.getTwitterData();
    // this.service.filterTweetsData();
    // const originalTweetedData = this.service.getOriginalTweetedData();
    // const reTweetedData = this.service.getReTweetedData();

    // this.twitterSource.load(twitterData);
    // this.originalTweetedSource.load(originalTweetedData);
    // this.reTweetedSource.load(reTweetedData);
    
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  getAllTweets() {
    this.service.getTwitterTweets ('GetAllUser')
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
