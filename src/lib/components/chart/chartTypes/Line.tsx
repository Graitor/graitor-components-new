import { ChartAlignType, ChartAnchorType, ChartOptions, ChartScaleOptions, LegendPosition } from "./index";

export enum LineChartPointType {
  CIRCLE = "circle"
}

interface Props {
  displayValues?: boolean,
  displayLegend?: boolean,
  fill?: boolean,
  align?: ChartAlignType
}

export interface LineChartOptions extends ChartOptions, ChartScaleOptions {
  elements: {
    line: {
      fill: boolean,
      borderColor: string,
      borderWidth: number,
    },
    point: {
      pointStyle: LineChartPointType,
      backgroundColor: string,
      borderColor: string,
      borderWidth: number,
    }
  },
}

const Chart = ({ displayValues = true, displayLegend = false, fill = false, align = ChartAlignType.CENTER }: Props): LineChartOptions => {

  return {
    scales: {
      yAxes: {
        ticks: {},
        min: 0,
      },
      xAxes: {
        ticks: {},
        grid: {
          display: false
        }
      }
    },
    layout: {
      padding: {
        top: 30,
        left: 20,
        right: 20,
        bottom: 15,
      },
    },
    elements: {
      line: {
        fill: fill,
        borderColor: '#394457',
        borderWidth: 2,
      },
      point: {
        pointStyle: LineChartPointType.CIRCLE,
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 1
      }
    },
    plugins: {
      tooltip: {
        enabled: !displayValues,
        callbacks: {
          title: () => null,
          label: ({ formattedValue }) => formattedValue
        }
      },
      legend: {
        display: displayLegend,
        position: LegendPosition.RIGHT
      },
      datalabels: {
        align: align,
        offset: 8,
        anchor: ChartAnchorType.CENTER,
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 25,
        formatter: function(value: number): string|null {
          if (value && displayValues) {
            return `${value}`;
          }
          return null
        },
        font: {
          size: 10,
        },
        labels: {
          title: {
            color: 'black',
            font: {
              weight: 'bold'
            },
          },
        }
      }
    }
  }
}

export default Chart