const cutLabel = (value = "") => {
  if (value === "unknown") return "?";
  return value.substr(0, 3);
}

const Chart = ({ unit = "", labels, displayValues = true }) => {

  return {
    layout: {
      padding: 38,
    },
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
      datalabels: {
        color: 'pink',
        clamp: true,
        align: ({ dataIndex }) => dataIndex % 2 === 0 ? 'start' : 'end',
        offset: ({ dataIndex }) => dataIndex % 2 === 0 ? 0 : Math.random() * 50,
        anchor: ({ dataIndex }) => dataIndex % 2 === 0 ? 'end' : 'center',
        backgroundColor: 'white',
        borderRadius: 6,
        padding: 3,
        borderWidth: 1,
        borderColor: '#000',
        formatter: function (value, { dataIndex }) {
          if (displayValues && value > 0) {
            value = value.toString();
            value = value.split(/(?=(?:...)*$)/);
            value = value.join(',');
            return `${ cutLabel(labels[dataIndex]) }: ${ value }${ unit }`;
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