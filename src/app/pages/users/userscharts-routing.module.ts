import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersChartsComponent } from './userscharts.component';
import { UsersEchartsComponent } from './usersecharts/usersecharts.component';
//import { TablesComponent } from './tables.component';
import { UsersSmartTableComponent } from './userssmart-table/userssmart-table.component';

const routes: Routes = [{
  path: '',
  component: UsersChartsComponent,
  children: [{
    path: 'usersecharts',
    component: UsersEchartsComponent,
  }, {
    path: 'userssmart-table',
    component: UsersSmartTableComponent,
  } ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersChartsRoutingModule { }

export const routedComponents = [
  UsersChartsComponent,
  UsersEchartsComponent,
  UsersSmartTableComponent,
];
