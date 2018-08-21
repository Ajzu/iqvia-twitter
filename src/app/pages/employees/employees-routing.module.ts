import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeesComponent } from './Employees.component';
import { UsersEchartsComponent } from './usersecharts/usersecharts.component';
//import { TablesComponent } from './tables.component';
import { UsersSmartTableComponent } from './userssmart-table/userssmart-table.component';

const routes: Routes = [{
  path: '',
  component: EmployeesComponent,
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
export class EmployeesRoutingModule { }

export const routedComponents = [
  EmployeesComponent,
  UsersEchartsComponent,
  UsersSmartTableComponent,
];
