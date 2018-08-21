import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CricketPlayersChartsComponent } from './cricketplayerscharts.component';
import { CricketPlayersEchartsComponent } from './cricketplayersecharts/cricketplayersecharts.component';
//import { TablesComponent } from './tables.component';
import { CricketPlayersSmartTableComponent } from './cricketplayerssmart-table/CricketPlayerssmart-table.component';

const routes: Routes = [{
  path: '',
  component: CricketPlayersChartsComponent,
  children: [{
    path: 'cricketplayersecharts',
    component: CricketPlayersEchartsComponent,
  }, {
    path: 'cricketplayerssmart-table',
    component: CricketPlayersSmartTableComponent,
  } ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CricketPlayersChartsRoutingModule { }

export const routedComponents = [
  CricketPlayersChartsComponent,
  CricketPlayersEchartsComponent,
  CricketPlayersSmartTableComponent,
];
