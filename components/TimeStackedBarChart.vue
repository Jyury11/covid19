<template>
  <data-view :title="title" :title-id="titleId" :date="date">
    <template v-slot:button>
      <ul :class="$style.GraphDesc">
        <li>
          {{ $t('（注）検体を採取した日を基準とする') }}
        </li>
        <li>
          {{
            $t(
              '（注）同一の対象者について複数の検体を検査する場合あり（11月30日までは件数、12月1日以降は人数を集計）'
            )
          }}
        </li>
        <li>
          {{
            $t(
              '（注）速報値として公開するものであり、後日確定データとして修正される場合あり'
            )
          }}
        </li>
      </ul>
      <data-selector
        v-model="dataKind"
        :target-id="chartId"
        :style="{ display: canvas ? 'inline-block' : 'none' }"
      />
    </template>
    <ul
      :class="$style.GraphLegend"
      :style="{ display: canvas ? 'block' : 'none' }"
    >
      <li v-for="(item, i) in items" :key="i" @click="onClickLegend(i)">
        <button>
          <div
            :style="{
              backgroundColor: colors[i].fillColor,
              borderColor: colors[i].strokeColor
            }"
          />
          <span
            :style="{
              textDecoration: displayLegends[i] ? 'none' : 'line-through'
            }"
            >{{ item }}</span
          >
        </button>
      </li>
    </ul>
    <scrollable-chart v-show="canvas" :display-data="displayData">
      <template v-slot:chart="{ chartWidth }">
        <bar
          :ref="'barChart'"
          :chart-id="chartId"
          :chart-data="displayData"
          :options="displayOption"
          :display-legends="displayLegends"
          :height="240"
          :width="chartWidth"
        />
      </template>
      <template v-slot:sticky-chart>
        <bar
          class="sticky-legend"
          :chart-id="`${chartId}-header`"
          :chart-data="displayDataHeader"
          :options="displayOptionHeader"
          :plugins="yAxesBgPlugin"
          :display-legends="displayLegends"
          :height="240"
        />
      </template>
    </scrollable-chart>
    <v-data-table
      :style="{ top: '-9999px', position: canvas ? 'fixed' : 'static' }"
      :headers="tableHeaders"
      :items="tableData"
      :items-per-page="-1"
      :hide-default-footer="true"
      :height="240"
      :fixed-header="true"
      :disable-sort="true"
      :mobile-breakpoint="0"
      item-key="name"
    />
    <p :class="$style.DataViewDesc">
      <slot name="additionalNotes" />
    </p>
    <template v-slot:infoPanel>
      <data-view-basic-info-panel
        :l-text="displayInfo.lText"
        :s-text="displayInfo.sText"
        :unit="displayInfo.unit"
      />
    </template>
    <template v-slot:footer>
      <open-data-link :url="url" />
    </template>
  </data-view>
</template>

<script lang="ts">
import Vue from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'
import { TranslateResult } from 'vue-i18n'
import { Chart } from 'chart.js'
import DataView from '@/components/DataView.vue'
import DataSelector from '@/components/DataSelector.vue'
import DataViewBasicInfoPanel from '@/components/DataViewBasicInfoPanel.vue'
import OpenDataLink from '@/components/OpenDataLink.vue'
import ScrollableChart from '@/components/ScrollableChart.vue'
import { DisplayData, yAxesBgPlugin } from '@/plugins/vue-chart'
import { getGraphSeriesStyle, SurfaceStyle } from '@/utils/colors'

interface HTMLElementEvent<T extends HTMLElement> extends MouseEvent {
  currentTarget: T
}
type Data = {
  dataKind: 'transition' | 'cumulative'
  canvas: boolean
  displayLegends: boolean[]
  colors: SurfaceStyle[]
}
type Methods = {
  sum: (array: number[]) => number
  cumulative: (array: number[]) => number[]
  pickLastNumber: (chartDataArray: number[][]) => number[]
  cumulativeSum: (chartDataArray: number[][]) => number[]
  eachArraySum: (chartDataArray: number[][]) => number[]
  onClickLegend: (i: number) => void
}

type Computed = {
  displayInfo: {
    lText: string
    sText: string
    unit: string
  }
  displayData: DisplayData
  displayOption: Chart.ChartOptions
  displayDataHeader: DisplayData
  displayOptionHeader: Chart.ChartOptions
  scaledTicksYAxisMax: number
  tableHeaders: {
    text: TranslateResult
    value: string
  }[]
  tableData: {
    [key: number]: number
  }[]
}

type Props = {
  title: string
  titleId: string
  chartId: string
  chartData: number[][]
  date: string
  items: string[]
  labels: string[]
  dataLabels: string[] | TranslateResult[]
  unit: string
  initialCumulative: number
  url: string
  yAxesBgPlugin: Chart.PluginServiceRegistrationOptions[]
}

const options: ThisTypedComponentOptionsWithRecordProps<
  Vue,
  Data,
  Methods,
  Computed,
  Props
> = {
  created() {
    this.canvas = process.browser
  },
  components: {
    DataView,
    DataSelector,
    DataViewBasicInfoPanel,
    OpenDataLink,
    ScrollableChart
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    titleId: {
      type: String,
      required: false,
      default: ''
    },
    chartId: {
      type: String,
      default: 'time-stacked-bar-chart'
    },
    chartData: {
      type: Array,
      required: false,
      default: () => []
    },
    date: {
      type: String,
      required: true,
      default: ''
    },
    items: {
      type: Array,
      default: () => []
    },
    labels: {
      type: Array,
      default: () => []
    },
    dataLabels: {
      type: Array,
      default: () => []
    },
    unit: {
      type: String,
      default: ''
    },
    initialCumulative: {
      type: Number,
      default: 0
    },
    url: {
      type: String,
      default: ''
    },
    yAxesBgPlugin: {
      type: Array,
      default: () => yAxesBgPlugin
    }
  },
  data: () => ({
    dataKind: 'transition',
    displayLegends: [true, true],
    colors: getGraphSeriesStyle(2),
    canvas: true
  }),
  computed: {
    displayInfo() {
      if (this.dataKind === 'transition') {
        return {
          lText: this.sum(this.pickLastNumber(this.chartData)).toLocaleString(),
          sText: `${this.$t('{date}の合計', {
            date: this.labels[this.labels.length - 1].replace(/^0/, '')
          })}`,
          unit: this.unit
        }
      }
      return {
        lText: (
          this.sum(this.cumulativeSum(this.chartData)) + this.initialCumulative
        ).toLocaleString(),
        sText: `${this.$t('{date}までの累計（内{offset}件は4/26までの累計）', {
          date: this.labels[this.labels.length - 1].replace(/^0/, ''),
          offset: this.initialCumulative.toLocaleString()
        })}`,
        unit: this.unit
      }
    },
    displayData() {
      const graphSeries = getGraphSeriesStyle(this.chartData.length)
      if (this.dataKind === 'transition') {
        return {
          labels: this.labels,
          datasets: this.chartData.map((item, index) => {
            return {
              label: this.items[index],
              data: item,
              backgroundColor: graphSeries[index].fillColor,
              borderColor: graphSeries[index].strokeColor,
              borderWidth: { left: 0, top: 1, right: 0, bottom: 0 }
            }
          })
        }
      }
      return {
        labels: this.labels,
        datasets: this.chartData.map((item, index) => {
          return {
            label: this.items[index],
            data: this.cumulative(item),
            backgroundColor: graphSeries[index].fillColor,
            borderColor: graphSeries[index].strokeColor,
            borderWidth: { left: 0, top: 1, right: 0, bottom: 0 }
          }
        })
      }
    },
    tableHeaders() {
      return [
        { text: this.$t('日付'), value: 'text' },
        ...this.items.map((text, value) => {
          return { text, value: String(value) }
        })
      ]
    },
    tableData() {
      return this.displayData.datasets[0].data.map((_, i) => {
        return Object.assign(
          { text: this.labels[i] },
          ...this.items.map((_, j) => {
            return {
              [j]: this.displayData.datasets[j].data[i]
            }
          })
        )
      })
    },
    displayOption() {
      const unit = this.unit
      const sumArray = this.eachArraySum(this.chartData)
      const data = this.chartData
      const cumulativeData = this.chartData.map(item => {
        return this.cumulative(item)
      })
      const cumulativeSumArray = this.eachArraySum(cumulativeData)
      const options: Chart.ChartOptions = {
        tooltips: {
          displayColors: false,
          callbacks: {
            label: tooltipItem => {
              let casesTotal, cases
              if (this.dataKind === 'transition') {
                casesTotal = sumArray[tooltipItem.index!].toLocaleString()
                cases = data[tooltipItem.datasetIndex!][
                  tooltipItem.index!
                ].toLocaleString()
              } else {
                casesTotal = cumulativeSumArray[
                  tooltipItem.index!
                ].toLocaleString()
                cases = cumulativeData[tooltipItem.datasetIndex!][
                  tooltipItem.index!
                ].toLocaleString()
              }

              return `${
                this.dataLabels[tooltipItem.datasetIndex!]
              }: ${cases} ${unit} (${this.$t('合計')}: ${casesTotal} ${unit})`
            },
            title(tooltipItem, data) {
              return String(data.labels![tooltipItem[0].index!])
            }
          }
        },
        responsive: false,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              id: 'day',
              stacked: true,
              gridLines: {
                display: false
              },
              ticks: {
                fontSize: 9,
                maxTicksLimit: 20,
                fontColor: '#808080',
                maxRotation: 0,
                callback: (label: string) => {
                  return label.split('/')[1]
                }
              }
              // #2384: If you set "type" to "time", make sure that the bars at both ends are not hidden.
              // #2384: typeをtimeに設定する時はグラフの両端が見切れないか確認してください
            },
            {
              id: 'month',
              stacked: true,
              gridLines: {
                drawOnChartArea: false,
                drawTicks: true,
                drawBorder: false,
                tickMarkLength: 10
              },
              ticks: {
                fontSize: 11,
                fontColor: '#808080',
                padding: 3,
                fontStyle: 'bold'
              },
              type: 'time',
              time: {
                unit: 'month',
                parser: 'M/D',
                displayFormats: {
                  month: 'MMM'
                }
              }
            }
          ],
          yAxes: [
            {
              stacked: true,
              gridLines: {
                display: true,
                color: '#E5E5E5'
              },
              ticks: {
                suggestedMin: 0,
                suggestedMax: this.scaledTicksYAxisMax,
                maxTicksLimit: 8,
                fontColor: '#808080'
              }
            }
          ]
        }
      }
      if (this.$route.query.ogp === 'true') {
        Object.assign(options, { animation: { duration: 0 } })
      }
      return options
    },
    displayDataHeader() {
      let n = 0
      let max = 0
      for (const i in this.displayData.datasets[0].data) {
        const current =
          this.displayData.datasets[0].data[i] +
          this.displayData.datasets[1].data[i]
        if (current > max) {
          max = current
          n = Number(i)
        }
      }
      return {
        labels: ['2020/1/1'],
        datasets: [
          {
            data: [this.displayData.datasets[0].data[n]],
            backgroundColor: 'transparent',
            borderWidth: 0
          },
          {
            data: [this.displayData.datasets[1].data[n]],
            backgroundColor: 'transparent',
            borderWidth: 0
          }
        ]
      }
    },
    displayOptionHeader() {
      const options: Chart.ChartOptions = {
        responsive: false,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        tooltips: { enabled: false },
        scales: {
          xAxes: [
            {
              id: 'day',
              stacked: true,
              gridLines: {
                display: false
              },
              ticks: {
                fontSize: 9,
                maxTicksLimit: 20,
                fontColor: 'transparent',
                maxRotation: 0,
                minRotation: 0,
                callback: (label: string) => {
                  return label.split('/')[1]
                }
              }
            },
            {
              id: 'month',
              stacked: true,
              gridLines: {
                drawOnChartArea: false,
                drawTicks: false, // true -> false
                drawBorder: false,
                tickMarkLength: 10
              },
              ticks: {
                fontSize: 11,
                fontColor: 'transparent', // #808080
                padding: 13, // 3 + 10(tickMarkLength)
                fontStyle: 'bold',
                callback: (label: string) => {
                  const monthStringArry = [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec'
                  ]
                  const month = monthStringArry.indexOf(label.split(' ')[0]) + 1
                  return month + '月'
                }
              },
              type: 'time',
              time: {
                unit: 'month'
              }
            }
          ],
          yAxes: [
            {
              stacked: true,
              gridLines: {
                display: true,
                drawOnChartArea: false,
                color: '#E5E5E5' // #E5E5E5
              },
              ticks: {
                suggestedMin: 0,
                suggestedMax: this.scaledTicksYAxisMax,
                maxTicksLimit: 8,
                fontColor: '#808080' // #808080
              }
            }
          ]
        },
        animation: { duration: 0 }
      }
      return options
    },
    scaledTicksYAxisMax() {
      let max = 0
      for (const i in this.chartData[0]) {
        max = Math.max(max, this.chartData[0][i] + this.chartData[1][i])
      }
      return max
    }
  },
  methods: {
    onClickLegend(i) {
      this.displayLegends[i] = !this.displayLegends[i]
      this.displayLegends = this.displayLegends.slice()
    },
    cumulative(array: number[]): number[] {
      const cumulativeArray: number[] = []
      let patSum = 0
      array.forEach(d => {
        patSum += d
        cumulativeArray.push(patSum)
      })
      return cumulativeArray
    },
    sum(array: number[]): number {
      return array.reduce((acc, cur) => {
        return acc + cur
      })
    },
    pickLastNumber(chartDataArray: number[][]) {
      return chartDataArray.map(array => {
        return array[array.length - 1]
      })
    },
    cumulativeSum(chartDataArray: number[][]) {
      return chartDataArray.map(array => {
        return array.reduce((acc, cur) => {
          return acc + cur
        })
      })
    },
    eachArraySum(chartDataArray: number[][]) {
      const sumArray: number[] = []
      for (let i = 0; i < chartDataArray[0].length; i++) {
        sumArray.push(chartDataArray[0][i] + chartDataArray[1][i])
      }
      return sumArray
    }
  },
  mounted() {
    const barChart = this.$refs.barChart as Vue
    const barElement = barChart.$el
    const canvas = barElement.querySelector('canvas')
    const labelledbyId = `${this.titleId}-graph`

    if (canvas) {
      canvas.setAttribute('role', 'img')
      canvas.setAttribute('aria-labelledby', labelledbyId)
    }
  }
}

export default Vue.extend(options)
</script>

<style module lang="scss">
.Graph {
  &Desc {
    width: 100%;
    margin: 0;
    margin-bottom: 0 !important;
    padding-left: 0 !important;
    font-size: 12px;
    color: $gray-3;
    list-style: none;
  }
  &Legend {
    text-align: center;
    list-style: none;
    padding: 0 !important;
    li {
      display: inline-block;
      margin: 0 3px;
      div {
        height: 12px;
        margin: 2px 4px;
        width: 40px;
        display: inline-block;
        vertical-align: middle;
        border-width: 1px;
        border-style: solid;
      }
      button {
        color: $gray-3;
        font-size: 12px;
      }
    }
  }
}
.DataView {
  &Desc {
    margin-top: 10px;
    margin-bottom: 0 !important;
    font-size: 12px;
    line-height: 15px;
    color: $gray-3;
  }
}
</style>
