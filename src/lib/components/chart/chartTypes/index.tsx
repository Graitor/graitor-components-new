export { default as HBar } from './HBar'
export { default as VBar } from './VBar'
export { default as Pie } from './Pie'
export { default as Line } from './Line'

export enum ChartType {
  PIE = "pie",
  VBAR = "vbar",
  HBAR = "hbar",
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

interface ChartPadding {
  top?: number,
  right?: number,
  bottom?: number,
  left?: number,
}

export enum LegendPosition {
  TOP = 'top',
  RIGHT = 'right',
  BOTTOM = 'bottom',
  LEFT = 'left',
}

export interface ChartScaleOptions {
  indexAxis?: string,
  scaleShowValues?: boolean,
  scales: {
    yAxes: {
      ticks: {
        autoSkip?: boolean,
        stepSize?: number,
      },
      grid?: {
        display: boolean,
      }
      min?: number,
    },
    xAxes: {
      ticks: {
        display?: boolean,
        autoSkip?: boolean,
        stepSize?: number,
      },
      grid?: {
        display: boolean,
      }
      min?: number,
    }
  },
}

export interface ChartOptions {
  layout: {
    padding: number|ChartPadding,
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
      position?: LegendPosition,
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
      padding?: number|object,
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