import './App.css'
import Chart from 'chart.js/auto';
import { useEffect, useState } from "react";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar, Pie, Line } from './lib/components/chartTypes'

Chart.register(ChartDataLabels);

const cutLabel = (value = "") => {
  if (value === "unknown") return "?";
  return value.substr(0, 3);
}


const App = () => {
  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    "unknown"
  ]

  const [charts, setCharts] = useState([])
  const data = [10, 10, 5, 2, 20, 30, 0, 45, 155]
  const sections = [
    {
      id: 'pie',
      charts: [
        { id: 'pieChart', title: 'Pie chart #1' },
        { id: 'pieChart2', title: 'Pie chart #2' },
        { id: 'pieChart3', title: 'Pie chart #3' },
      ],
    },
    {
      id: 'bar',
      charts: [
        { id: 'barChart', title: 'Bar chart #1 - tooltip' },
        { id: 'barChart2', title: 'Bar chart #2' },
        { id: 'barChart3', title: 'Bar chart #3' },
      ],
    },
    {
      id: 'line',
      charts: [
        { id: 'lineChart', title: 'Line chart #1 - tooltip' },
        { id: 'lineChart2', title: 'Line chart #2' },
        { id: 'lineChart3', title: 'Line chart #3' }
      ]
    }
  ]

  const getColors = (chartType, size) => {
    if (chartType !== "PIE") return '#fc6514'
    const palette = []
    for (let i = 0; i < size; i++) {
      palette.push(`rgb(${ Math.floor(Math.random() * 255) },${ Math.floor(Math.random() * 255) },${ Math.floor(Math.random() * 255) })`)
    }
    return palette
  }

  const setChart = (index, chart) => {
    const newCharts = [...charts];
    if (index >= newCharts.length) {
      while (index >= newCharts.length) {
        newCharts.push(null)
      }
    }
    if (newCharts[index]) {
      newCharts[index].destroy();
    }
    newCharts[index] = chart
    setCharts(newCharts)
  }

  const draw = (index, id, type, settings = {}) => {
    let options = {}
    switch (type) {
      case "PIE":
        settings = { ...settings, labels }
        options = Pie(settings)
        break
      case "BAR":
        options = Bar(settings)
        break
      case "LINE":
        options = Line(settings)
        break
      default:
        console.error("Unknown chart type", type)
    }
    setChart(index, new Chart(
      document.getElementById(id).getContext('2d'),
      {
        type: type.toLowerCase(),
        data: {
          labels: labels.map(item => cutLabel(item)),
          datasets: [
            {
              label: 'My First dataset',
              backgroundColor: getColors(type, data.length),
              data: data,
            }
          ]
        },
        options: options
      }
    ))
  }

  useEffect(() => {
    setTimeout(() => {
      draw(0, "pieChart", "PIE", { unit: "%" })
      draw(1, "pieChart2", "PIE", {})
      draw(2, "pieChart3", "PIE", {})

      draw(3, "barChart", "BAR", { displayValues: false })
      draw(4, "barChart2", "BAR", { align: "end" })
      draw(5, "barChart3", "BAR", {})

      draw(6, "lineChart", "LINE", { displayValues: false })
      draw(7, "lineChart2", "LINE", { fill: true, align: 'end' })
      draw(8, "lineChart3", "LINE", {})
    }, 1000)
  }, [])

  return (
    <div className="App">
      {
        sections.map(({ id, charts }) =>
          <section key={id}>
            {
              charts.map(({ id, title }) =>
                  <div key={id} style={ {
                    width: '500px',
                    margin: '.5em',
                    border: 'solid brown 1px',
                    borderRadius: '6px',
                    backgroundColor: '#fff'
                  } }>
                    <div style={ { display: 'flex', justifyContent: 'space-between', padding: '.5em' } }>
                      <div>
                        <span>{ title }</span>
                        <span style={ { margin: '.5em' } }>#datepicker</span>
                      </div>
                      <div>
                        <span style={ { margin: '.5em' } }>#filter</span>
                      </div>
                    </div>
                    <canvas id={ id } width="400" height="400"/>
                  </div>
                )
            }
          </section>
        )
      }
    </div>
  )
}

export default App;
