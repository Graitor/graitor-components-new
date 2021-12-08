import { ChartAlignType, ChartAnchorType, ChartOptions } from "./index";

interface Props {
  labels: string[],
  displayValues?: boolean,
  align?: ChartAlignType,
  unit?: string,
}

export interface PieChartOptions extends ChartOptions {

}

const Chart = ({ labels, align = ChartAlignType.END, displayValues = true, unit = "" }: Props): PieChartOptions => {

  return {
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
        clamp: true,
        // INSIDE
        // align: ({ dataIndex }) => dataIndex % 3 === 0 ? ChartAlignType.START : dataIndex % 3 === 1 ? ChartAlignType.END : ChartAlignType.START,
        align: align,
        anchor: ChartAnchorType.CENTER,
        offset: ({ dataIndex }) => dataIndex % 3 === 0 ? 0 : dataIndex % 3 === 1 ? 30 : 60,
        // align: ChartAlignType.START,
        // anchor: ChartAnchorType.CENTER,
        // offset: ({ dataIndex }) => dataIndex % 3 === 0 ? 0 : dataIndex % 3 === 1 ? 30 : 60,
        backgroundColor: 'white',
        borderRadius: 6,
        padding: 3,
        borderWidth: 1,
        borderColor: '#000',
        formatter: (value: number, { dataIndex }: { dataIndex: number }): string|null => {
          if (Array.isArray(labels) && value > 0) {
            const formattedValue: string = value.toString().split(/(?=(?:...)*$)/).join(',');
            if (labels.length <= dataIndex) return null
            if (!displayValues) return labels[dataIndex]
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