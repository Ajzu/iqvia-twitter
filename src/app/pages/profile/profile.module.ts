import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';
import { Ng2SmartTableModule } from 'ng2-smart-table';// addon for twitter data and smart table

import { ThemeModule } from '../../@theme/theme.module';

import { ProfileRoutingModule, routedComponents } from './profile-routing.module';
import { SmartTableService } from '../../@core/data/smart-table.service';// get twitter data
// Addon Datepicker
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

const components = [
];

@NgModule({
  imports: [
  ThemeModule,
  ProfileRoutingModule,

  Ng2SmartTableModule,
  BsDatepickerModule.forRoot(),
  ],
  declarations: [...routedComponents, ...components],
  providers: [
    SmartTableService,
  ],
})
export class ProfileModule {}
