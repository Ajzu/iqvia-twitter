import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-cricketplayersecharts-pie',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class CricketPlayersEchartsPieComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.successLight, colors.warningLight, colors.infoLight, colors.dangerLight,
        colors.primaryLight, colors.dangerLight, colors.warningLight],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['Not Out', 'Bold', 'Catch', 'Stumping', 'Run-Out', 'Hit-Wicket', 'Obstruction'],
          textStyle: {
            color: echarts.textColor,
          },
        },
        series: [
          {
            name: 'Out Type',
            type: 'pie',
            radius: '80%',
            center: ['50%', '50%'],
            data: [
              { value: 105, name: 'Not Out' },
              { value: 100, name: 'Bold' },
              { value: 150, name: 'Catch' },
              { value: 90, name: 'Stumping' },
              { value: 38, name: 'Run-Out' },
              { value: 14, name: 'Hit-Wicket' },
              { value: 7, name: 'Obstruction' },
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: echarts.itemHoverShadowColor,
              },
            },
            label: {
              normal: {
                textStyle: {
                  color: echarts.textColor,
                },
              },
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: echarts.axisLineColor,
                },
              },
            },
          },
        ],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
