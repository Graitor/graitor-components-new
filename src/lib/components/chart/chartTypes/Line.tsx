const Chart = ({ displayValues = true, fill = false, align = "center" }) => {

  return {
    scales: {
      yAxes: {
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
    elements: {
      line: {
        fill: fill,
        borderColor: '#394457',
        borderWidth: 2,
      },
      point: {
        pointStyle: 'circle',
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
        display: false,
      },
      datalabels: {
        align: align,
        offset: 10,
        anchor: 'center',
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 25,
        formatter: function(value, { dataIndex }) {
          if (displayValues) {
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