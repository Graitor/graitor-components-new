import React from "react";
import './index.css'
import { useEffect, useState } from "react";
import Chart from 'chart.js/auto';
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar, Pie, Line } from "./chartTypes";
import { GraitorDropdown } from "../index";

Chart.register(ChartDataLabels);


const GraitorChart = ({
                        id,
                        title = "Required",
                        type,
                        dataset = {},
                        colors = [],
                        formatLabels = (label) => label
                      }) => {
  const [chart, setChart] = useState(null)

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
    switch (type) {
      case "pie":
        return Pie({ labels: Object.keys(dataset) })
      case "bar":
        return Bar({})
      case "line":
        return Line({})
      default:
        console.error(`Unknown chart type ${ type }`)
    }
  }

  useEffect(() => {
    if (chart) {
      chart.destroy()
    }

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
  }, [])


  return (
    <div key={ id } style={ {
      width: '500px',
      margin: '.5em',
      border: 'solid brown 1px',
      borderRadius: '25px',
      backgroundColor: '#fff'
    } }>
      <div style={ {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1em'
      } }>
        <div>
          <strong style={{ color: '#000' }}>{ title }</strong>
          {/*<span style={ { margin: '.5em' } }>#datepicker</span>*/}
        </div>
        <div>
          <GraitorDropdown title={"Type"}
                           options={[
                             { key: 'pie', value: 'Pie' },
                             { key: 'bar', value: 'Bar' },
                             { key: 'line', value: 'Line' },
                           ]}
          />
        </div>
      </div>
      <canvas id={ id } width="400" height="400"/>
      <div style={ { position: 'relative' } }>
        <span className={ "note" }>Graitor Charts</span>
      </div>
    </div>
  )
}

export default GraitorChart