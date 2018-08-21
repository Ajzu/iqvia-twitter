import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-usersecharts-ctcpie',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class UsersEchartsCTCPieComponent implements AfterViewInit, OnDestroy {
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
          data: ['Basic', 'House Rent Allowance (HRA)', 'Special Allowance', 'Transport Allowance', 'Medical', 'EPF', 'Others'],
          textStyle: {
            color: echarts.textColor,
          },
        },
        series: [
          {
            name: 'CTC Components',
            type: 'pie',
            radius: '80%',
            center: ['50%', '50%'],
            data: [
              { value: 40000, name: 'Basic' },
              { value: 15000, name: 'HRA' },
              { value: 15000, name: 'Special Allowance' },
              { value: 3000, name: 'Transport Allowance' },
              { value: 2000, name: 'Medical' },
              { value: 1500, name: 'EPF' },
              { value: 23500, name: 'Others'},
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
