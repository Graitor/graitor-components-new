import { ChartAlignType, ChartAnchorType, ChartOptions, ChartScaleOptions } from "./index";

interface Props {
  displayValues?: boolean,
  align?: ChartAlignType,
  anchor?: ChartAnchorType,
}

export interface HBarChartOptions extends ChartOptions, ChartScaleOptions {
}

const Chart = ({
                 displayValues = true,
                 align = ChartAlignType.CENTER,
                 anchor = ChartAnchorType.CENTER
               }: Props): HBarChartOptions => {

  return {
    indexAxis: 'y',
    scaleShowValues: true,
    scales: {
      yAxes: {
        ticks: {
          autoSkip: false,
        },
        min: 0,
        grid: {
          display: false
        },
      },
      xAxes: {
        ticks: {
          display: !displayValues,
          // stepSize: 1,
        },
        grid: {
          display: !displayValues
        },
        min: 0,
      }
    },
    layout: {
      padding: {
        top: 15,
        left: 15,
        right: 25,
        bottom: 15,
      },
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
        offset: 5,
        anchor: anchor,
        backgroundColor: 'white',
        borderRadius: 6,
        padding: align === ChartAlignType.CENTER ? 3 : 0,
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