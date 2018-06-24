<template>
    <div>
        <div class="box">
            <h2 class="card_title">OVERVIEW</h2>
            <div>
                <span>2018/6/6</span>
                <i class="el-icon-caret-right"></i>
                <span>2018/6/13</span>
                <select>
                    <option value="weekly">Weekly</option>
                </select>
            </div>
        </div>
        <div class="box card_group">
            <div class="card card_33">
                <font-awesome-icon icon="hand-holding-usd" size="lg" />
                <span class="total_span">TOTAL REVENUE</span><br>
                <p class="total color_font_g">54,540</p>
            </div>
            <div class="card card_33">
                <font-awesome-icon icon="boxes" size="lg" />
                <span class="total_span">TOTAL COST</span><br>
                <p class="total color_font_r">12,660</p>
            </div>
            <div class="card card_33">
                <font-awesome-icon icon="money-bill" size="lg" />
                <span class="total_span">NET INCOME</span><br>
                <p class="total color_font_b">41,880</p>
            </div>
        </div>
        <div class="card">
            <div>
                <span class="card_title">Activity</span>
            </div>
            <div class="chart">
                <chart :options="polar"></chart>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'LineChart',
  props: [],
  data: function() {
    return {
      polar: {
        legend: {
          data: ['Total Revenue', 'Total Cost', 'Net Income'],
          textStyle: {
            color: '#67757c',
            fontFamily: 'Lato',
            padding: 4
          }
        },
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        animationDuration: 2000,
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['6/9', '6/10', '6/11', '6/12', '6/13', '6/14', '6/15'],
          nameTextStyle: {
            color: '#67757c',
            fontFamily: 'Lato'
          }
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'Total Revenue',
            type: 'line',
            data: [5248, 5223, 4722, 3298, 6978, 3200, 4034],
            itemStyle: {
              color: '#4680ff'
            },
            lineStyle: {
              width: 3
            }
          },
          {
            name: 'Total Cost',
            type: 'line',
            data: [2200, 1820, 1910, 2340, 2900, 3300, 3100],
            itemStyle: {
              color: '#ffb64d'
            },
            lineStyle: {
              width: 3
            }
          },
          {
            name: 'Net Income',
            type: 'line',
            data: [1500, 2320, 2010, 1540, 1900, 3300, 4100],
            itemStyle: {
              color: '#26dad2'
            },
            lineStyle: {
              width: 3
            }
          }
        ]
      }
    };
  }
};
</script>

<style>
.card_33{
    width: 32%;
    text-align: center;
    padding: 30px 0;
}
.total{
    font-family: HelveticaNeue-Bold;
    font-size: 36px;
    margin: 16px 0 0;
}
.total_span{
    font-family: HelveticaNeue-Medium;
}
.chart{
    width: 100%;
}
.echarts {
    width: 100% !important;
}
</style>