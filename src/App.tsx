import { FC, useState } from 'react';
import './App.css'
import { ChartType, GraitorChart } from "./lib/components/chart";
import { DropdownItem, GraitorDropdown } from "./lib/components/dropdown";
import ShowCase from "./ShowCase";


const App: FC = (): JSX.Element => {

  const [ddValue, setDDValue] = useState<DropdownItem>({ key: 'en', value: 'English' });

  return (
    <div className="App">
      <ShowCase title={ "Chart" }>
        <GraitorChart id={ "chart" }
                      title={ "Graitor test chart" }
                      defaultType={ ChartType.PIE }
                      allowedTypes={ [ChartType.LINE, ChartType.PIE, ChartType.BAR] }
                      dataset={ {
                        '2021-10-17': 1,
                        '2021-10-18': 4,
                        '2021-10-19': 150,
                      } }
                      formatLabels={ (label) => {
                        if (label === "unknown") return "?"
                        const parts = label.split(/-+/g)
                        return `${ parts[2] }/${ parts[1] } ${ parts[0] }`
                      } }
        />
      </ShowCase>
      <ShowCase title={ "Dropdown" } style={ { display: 'flex', justifyContent: 'space-between' } }>
        <GraitorDropdown title={ "Language" }
                         defaultItem={ ddValue }
                         options={ [
                           { key: 'da', value: 'Dansk' },
                           { key: 'en', value: 'English' },
                           { key: 'de', value: 'Deutsch' },
                           { key: 'sk', value: 'Slovenčina' },
                         ] }
                         onChange={ (_oldValue, newValue) => {
                           setDDValue(newValue)
                         } }
        />
        <span>Value: { ddValue.key }</span>
      </ShowCase>
    </div>
  )
}

export default App;
