import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-usersecharts-pie',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class UsersEchartsPieComponent implements AfterViewInit, OnDestroy {
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
        colors.successLight, colors.primaryLight, colors.dangerLight],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['Home Loan', 'Car Loan', 'Communications', 'Electricity', 'Water', 'Fuel','Savings', 'Investments','Grocery etc', 'Others', 'Medicine'],
          textStyle: {
            color: echarts.textColor,
          },
        },
        series: [
          {
            name: 'Expenses',
            type: 'pie',
            radius: '80%',
            center: ['50%', '50%'],
            data: [
              { value: 50000, name: 'Home Loan' },
              { value: 12000, name: 'Car Loan' },
              { value: 600, name: 'Communications' },
              { value: 1000, name: 'Electricity' },
              { value: 800, name: 'Water' },
              { value: 4000, name: 'Fuel' },
              { value: 15000, name: 'Savings' },
              { value: 10000, name: 'Investments' },
              { value: 6000, name: 'Grocery etc' },
              { value: 4000, name: 'Others' },
              { value: 500, name: 'Medicine' },
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
