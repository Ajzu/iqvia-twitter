import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';
import { Ng2SmartTableModule } from 'ng2-smart-table';// addon for twitter data and smart table

import { ThemeModule } from '../../@theme/theme.module';

import { CricketPlayersChartsRoutingModule, routedComponents } from './CricketPlayerscharts-routing.module';
import { CricketPlayersEchartsLineComponent } from './CricketPlayersecharts/CricketPlayersecharts-line.component';
import { CricketPlayersEchartsPieComponent } from './CricketPlayersecharts/CricketPlayersecharts-pie.component';
import { CricketPlayersEchartsCTCPieComponent } from './CricketPlayersecharts/CricketPlayersecharts-ctcpie.component';
import { CricketPlayersEchartsTaxPieComponent } from './CricketPlayersecharts/CricketPlayersecharts-taxpie.component';
import { CricketPlayersEchartsBarComponent } from './CricketPlayersecharts/CricketPlayersecharts-bar.component';
import { CricketPlayersEchartsMultipleXaxisComponent } from './CricketPlayersecharts/CricketPlayersecharts-multiple-xaxis.component';
import { CricketPlayersEchartsAreaStackComponent } from './CricketPlayersecharts/CricketPlayersecharts-area-stack.component';
import { CricketPlayersEchartsBarAnimationComponent } from './CricketPlayersecharts/CricketPlayersecharts-bar-animation.component';
import { CricketPlayersEchartsRadarComponent } from './CricketPlayersecharts/CricketPlayersecharts-radar.component';
import { SmartTableService } from '../../@core/data/smart-table.service';// get twitter data
// Addon Datepicker
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

const components = [
  CricketPlayersEchartsLineComponent,
  CricketPlayersEchartsPieComponent,
  CricketPlayersEchartsCTCPieComponent,
  CricketPlayersEchartsTaxPieComponent,
  CricketPlayersEchartsBarComponent,
  CricketPlayersEchartsMultipleXaxisComponent,
  CricketPlayersEchartsAreaStackComponent,
  CricketPlayersEchartsBarAnimationComponent,
  CricketPlayersEchartsRadarComponent,
];

@NgModule({
  imports: [
  ThemeModule,
  CricketPlayersChartsRoutingModule,
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
export class CricketPlayersChartsModule {}
