import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { TablesComponent } from './tables.component';
import { ProfileSmartTableComponent } from './profilesmart-table.component';

const routes: Routes = [{
  path: '',
  component: ProfileSmartTableComponent,
  children: [{
    path: '',
    component: ProfileSmartTableComponent,
  } ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule { }

export const routedComponents = [

  ProfileSmartTableComponent,
];
