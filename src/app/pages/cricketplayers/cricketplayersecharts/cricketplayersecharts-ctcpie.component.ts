import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-cricketplayersecharts-ctcpie',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class CricketPlayersEchartsCTCPieComponent implements AfterViewInit, OnDestroy {
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
        color: [colors.warningLight, colors.infoLight, colors.dangerLight,
        colors.successLight, colors.primaryLight, colors.dangerLight,colors.successLight],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/><br/>{b} : {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['Dots', 'Singles', 'Doubles', '3s', 'Fours', 'Sixes'],
          textStyle: {
            color: echarts.textColor,
          },
        },
        series: [
          {
            name: 'Dots Vs Runs Components',
            type: 'pie',
            radius: '80%',
            center: ['50%', '50%'],
            data: [
              { value: 40000, name: 'Dots' },
              { value: 15000, name: 'Singles' },
              { value: 15000, name: 'Doubles' },
              { value: 3000, name: '3s' },
              { value: 2000, name: 'Fours' },
              { value: 1500, name: 'Sixes' },
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
