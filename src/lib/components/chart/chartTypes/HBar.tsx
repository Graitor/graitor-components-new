import { ChartAlignType, ChartAnchorType, ChartOptions, ChartScaleOptions } from "./index";

interface Props {
  displayValues?: boolean,
  align?: ChartAlignType,
  anchor?: ChartAnchorType,
}

export interface BarChartOptions extends ChartOptions, ChartScaleOptions {
}

const Chart = ({
                 displayValues = true,
                 align = ChartAlignType.CENTER,
                 anchor = ChartAnchorType.CENTER
               }: Props): BarChartOptions => {

  return {
    scales: {
      yAxes: {
        ticks: {},
        min: 0,
      },
      xAxes: {
        grid: {
          display: false
        }
      }
    },
    layout: {
      padding: 15,
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
        display: false,
      },
      datalabels: {
        align: align,
        offset: 0,
        anchor: anchor,
        backgroundColor: 'white',
        borderRadius: 6,
        formatter: function (value) {
          if (displayValues && value) {
            return `${ value }`;
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