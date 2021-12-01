const Chart = ({ displayValues = true, align = "center" }) => {

  return {
    scales: {
      yAxes: {},
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
        anchor: align,
        backgroundColor: 'white',
        borderRadius: 6,
        formatter: function (value, { dataIndex }) {
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
            value: {
              color: 'green'
            }
          },
        }
      }
    }
  }
}
export default Chart