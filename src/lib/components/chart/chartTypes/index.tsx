export { default as Bar } from './Bar'
export { default as Pie } from './Pie'
export { default as Line } from './Line'

export enum ChartType {
  PIE = "pie",
  BAR = "bar",
  LINE = "line",
}
export enum ChartLabelsType {
  HIDDEN = "hidden",
  INSIDE = "inside",
  FLOAT = "float",
}
export enum ChartAlignType {
 START = "start",
 CENTER = "center",
 END = "end",
}
export enum ChartAnchorType {
  CENTER = "center",
  END = "end",
}

export interface ChartScaleOptions {
  scales: {
    yAxes: {
      ticks: {
        stepSize?: number,
      },
      min?: number,
    },
    xAxes: {
      grid: {
        display: boolean,
      }
    }
  },
}

export interface ChartOptions {
  layout: {
    padding: number,
  },
  plugins: {
    tooltip: {
      enabled: boolean,
      callbacks?: {
        title: () => null,
        label: ({ formattedValue }: { formattedValue: string }) => string
      }
    },
    legend: {
      display: boolean,
    },
    datalabels: {
      clamp?: boolean,
      align: ChartAlignType | (({ dataIndex }: { dataIndex: number }) => ChartAlignType),
      offset: number | (({ dataIndex }: { dataIndex: number }) => number),
      anchor: ChartAnchorType | (({ dataIndex }: { dataIndex: number }) => ChartAnchorType),
      backgroundColor?: string,
      borderColor?: string,
      borderWidth?: number,
      borderRadius?: number,
      padding?: number,
      formatter?: (value: number, { dataIndex }: { dataIndex: number }) => string | null,
      font?: {
        size: number,
      },
      labels: {
        title: {
          color: string,
          font: {
            weight: string
          },
        },
      }
    }
    // font: {
    //   size: number,
    // },
    // labels: {
    //   title: {
    //     color: string,
    //     font: {
    //       weight: string
    //     },
    //     value: {
    //       color: string
    //     }
    //   },
    // },
  }
}