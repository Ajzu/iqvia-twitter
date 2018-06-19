import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';
import { Ng2SmartTableModule } from 'ng2-smart-table';// addon for twitter data and smart table

import { ThemeModule } from '../../@theme/theme.module';

import { UsersChartsRoutingModule, routedComponents } from './userscharts-routing.module';
import { UsersEchartsLineComponent } from './usersecharts/usersecharts-line.component';
import { UsersEchartsPieComponent } from './usersecharts/usersecharts-pie.component';
import { UsersEchartsBarComponent } from './usersecharts/usersecharts-bar.component';
import { UsersEchartsMultipleXaxisComponent } from './usersecharts/usersecharts-multiple-xaxis.component';
import { UsersEchartsAreaStackComponent } from './usersecharts/usersecharts-area-stack.component';
import { UsersEchartsBarAnimationComponent } from './usersecharts/usersecharts-bar-animation.component';
import { UsersEchartsRadarComponent } from './usersecharts/usersecharts-radar.component';
import { SmartTableService } from '../../@core/data/smart-table.service';// get twitter data
// Addon Datepicker
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

const components = [
  UsersEchartsLineComponent,
  UsersEchartsPieComponent,
  UsersEchartsBarComponent,
  UsersEchartsMultipleXaxisComponent,
  UsersEchartsAreaStackComponent,
  UsersEchartsBarAnimationComponent,
  UsersEchartsRadarComponent,
];

@NgModule({
  imports: [
  ThemeModule,
  UsersChartsRoutingModule,
  NgxEchartsModule,
  NgxChartsModule,
  ChartModule,
  Ng2SmartTableModule,
  BsDatepickerModule.forRoot(),
  ],
  declarations: [...routedComponents, ...components],
  providers: [
    SmartTableService,
  ],
})
export class UsersChartsModule {}
