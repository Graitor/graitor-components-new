import { ChartAlignType, ChartAnchorType, ChartOptions } from "./index";

interface Props {
  displayValues?: boolean,
  unit?: string,
  labels: string[],
}

export interface PieChartOptions extends ChartOptions {

}

const Chart = ({ labels, displayValues = true, unit = "" }: Props): PieChartOptions => {

  return {
    layout: {
      padding: 15,
    },
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
      datalabels: {
        clamp: true,
        align: ({ dataIndex }) => dataIndex % 2 === 0 ? ChartAlignType.START : ChartAlignType.END,
        offset: ({ dataIndex }) => dataIndex % 2 === 0 ? 0 : Math.random() * 50,
        anchor: ({ dataIndex }) => dataIndex % 2 === 0 ? ChartAnchorType.END : ChartAnchorType.CENTER,
        backgroundColor: 'white',
        borderRadius: 6,
        padding: 3,
        borderWidth: 1,
        borderColor: '#000',
        formatter: (value: number, { dataIndex }: { dataIndex: number }): string|null => {
          if (Array.isArray(labels) && displayValues && value > 0) {
            const formattedValue: string = value.toString().split(/(?=(?:...)*$)/).join(',');
            if (labels.length <= dataIndex) return null
            return `${ labels[dataIndex] }: ${ formattedValue }${ unit }`;
          } else {
            return null
          }
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