import React, { useEffect, useState } from "react";
import './GraitorChart.css'
import Chart from 'chart.js/auto';
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar, Pie, Line } from "./chartTypes";
import { GraitorDropdown } from "../../index";

Chart.register(ChartDataLabels);


const GraitorChart = ({
                        id,
                        title = "Required",
                        defaultType = "bar",
                        dataset = {},
                        colors = [],
                        formatLabels = (label) => label
                      }) => {
  const [chart, setChart] = useState(null)
  const [type, setType] = useState(defaultType)

  const options = [
    { key: 'pie', value: 'Pie' },
    { key: 'bar', value: 'Bar' },
    { key: 'line', value: 'Line' },
  ]

  const getRandomColor = () => {
    return `rgb(${ Math.floor(Math.random() * 255) },${ Math.floor(Math.random() * 255) },${ Math.floor(Math.random() * 255) })`
  }

  const getColors = () => {
    const innerColors = [...colors]
    if (colors.length === 0) innerColors.push(getRandomColor())
    if (type !== 'pie') return innerColors[0];
    for (let i = colors.length; i < Object.keys(dataset).length; i++) {
      innerColors.push(getRandomColor())
    }
    return innerColors;
  }

  const getOptions = (type) => {
    let chart = Pie({ labels: Object.keys(dataset).map(item => formatLabels(item)) })

    switch (type) {
      case "pie":
        return chart
      case "bar":
        chart = Bar({ displayValues: false })
        break
      case "line":
        chart = Line({})
        break
      default:
        console.error(`Unknown chart type ${ type }`)
    }
    if (Math.max(...Object.values(dataset)) - Math.min(...Object.values(dataset)) < 5) {
      chart.scales.yAxes.ticks = {
        stepSize: 1
      }
    }
    return chart
  }

  const isDatasetEmpty = () => {
    return dataset == null
      || Object.keys(dataset).length === 0
      || Object.values(dataset).reduce((acc, next) => acc + next, 0) === 0
  }

  useEffect(() => {
    if (chart) {
      chart.destroy()
    }

    if (isDatasetEmpty()) return

    setChart(new Chart(
      document.getElementById(id).getContext('2d'),
      {
        type: type.toLowerCase(),
        data: {
          labels: Object.keys(dataset).map(item => formatLabels(item)),
          datasets: [
            {
              backgroundColor: getColors(),
              data: Object.values(dataset),
            }
          ]
        },
        options: getOptions(type)
      }
    ));
  }, [type])


  return (
    <div key={ id } className={ "chart-wrapper" }>
      <div className={ "chart-header" }>
        <strong>{ title }</strong>
        { isDatasetEmpty() &&
        <div className={ "chart-empty-note" }>Nothing to show</div>
        }
        { !isDatasetEmpty() &&
        <GraitorDropdown title={ "Type" }
                         defaultItem={ options.find(item => item.key === defaultType) }
                         options={ options }
                         onChange={ (oldValue, newValue) => {
                           setType(newValue.key)
                         } }
        />
        }
      </div>
      { !isDatasetEmpty() &&
      <div>
        <canvas id={ id } width="400" height="400" style={ { maxHeight: '500px', maxWidth: '98%' } }/>
      </div>
      }
      <div className={ "chart-footer" }>
        <span className={ "chart-note" }>Graitor Charts</span>
      </div>
    </div>
  )
}

export default GraitorChart