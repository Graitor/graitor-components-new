import { FC, useState } from 'react';
import './App.css'
import { ChartType, GraitorChart } from "./lib/components/chart";
import { DropdownItem, GraitorDropdown } from "./lib/components/dropdown";
import ShowCase from "./ShowCase";


const App: FC = (): JSX.Element => {

  const [ddValue, setDDValue] = useState<DropdownItem>({ key: 'en', value: 'English' });

  return (
    <div className="App">
      <ShowCase title={ "Empty dataset" }>
        <GraitorChart id={ "chart#fails#on#empty" }
                      title={ "Graitor empty chart" }
                      defaultType={ ChartType.LINE }
                      dataset={ [
                        { label: 'ahoj', data: {} },
                        { data: { '01': 0, '02': 0 } }
                      ] }
                      sortLabels={ () => 1 }
        />
      </ShowCase>
      <ShowCase title={ "Chart type testing" }>
        <GraitorChart id={ "chart#types#testing" }
                      title={ "Graitor change type failure" }
                      defaultType={ ChartType.LINE }
                      allowedTypes={ [ChartType.LINE, ChartType.VBAR] }
                      dataset={  {
                        label: 'Pant success',
                        data: {
                          'Jan': 15,
                          'Feb': 3,
                          'Mar': 5,
                          'Apr': 68,
                        }
                      } }
                      sortLabels={ () => 1 }
        />
      </ShowCase>
      <ShowCase title={ "Multiple dataset chart" }>
        <GraitorChart id={ "chart#0" }
                      title={ "Graitor test chart" }
                      defaultType={ ChartType.LINE }
                      // allowedTypes={ [ChartType.LINE, ChartType.VBAR, ChartType.HBAR] }
                      dataset={ [
                        {
                          label: 'Pant success',
                          data: {
                            'Jan': 15,
                            'Feb': 3,
                            'Mar': 5,
                            'Apr': 68,
                          }
                        },
                        {
                          label: 'Pant fail',
                          data: {
                            'Jan': 2,
                            'Feb': 12,
                            'Mar': 6,
                            'Apr': 8,
                          }
                        }
                      ] }
                      sortLabels={ () => 1 }
        />
      </ShowCase>
      <ShowCase title={ "Chart" }>
        <GraitorChart id={ "chart#1" }
                      title={ "Graitor test chart" }
                      defaultType={ ChartType.HBAR }
                      allowedTypes={ [ChartType.HBAR] }
                      dataset={ {
                        label: 'My favorite label',
                        data: {
                          '2021-09-14': 1,
                          '2021-09-15': 0,
                          '2021-09-16': 1,
                          '2021-09-17': 0,
                          '2021-09-18': 0,
                          '2021-09-19': 0,
                          '2021-09-20': 0,
                          '2021-09-21': 0,
                          '2021-09-22': 0,
                          '2021-09-23': 1,
                          '2021-09-24': 1,
                          '2021-09-25': 0,
                          '2021-09-26': 0,
                          '2021-09-27': 0,
                          '2021-09-28': 0,
                          '2021-09-29': 0,
                          '2021-09-30': 0,
                          '2021-10-01': 0,
                          '2021-10-02': 0,
                          '2021-10-03': 0,
                          '2021-10-04': 0,
                          '2021-10-05': 5,
                          '2021-10-06': 0,
                          '2021-10-07': 0,
                          '2021-10-08': 0,
                          '2021-10-09': 0,
                          '2021-10-10': 0,
                          '2021-10-11': 0,
                          '2021-10-12': 0,
                          '2021-10-13': 0,
                          '2021-10-14': 0,
                          '2021-10-15': 0,
                          '2021-10-16': 0,
                          '2021-10-17': 1,
                          '2021-10-18': 0,
                          '2021-10-19': 0,
                          '2021-10-20': 4,
                          '2021-10-21': 4,
                          '2021-10-22': 0,
                          '2021-10-23': 0,
                          '2021-10-24': 0,
                          '2021-10-25': 0,
                          '2021-10-26': 0,
                          '2021-10-27': 0,
                          '2021-10-28': 0,
                          '2021-10-29': 1,
                          '2021-10-30': 0,
                          '2021-10-31': 0,
                          '2021-11-01': 1,
                          '2021-11-02': 0,
                          '2021-11-03': 0,
                          '2021-11-04': 0,
                          '2021-11-05': 156,
                          '2021-11-06': 0,
                          '2021-11-07': 0,
                          '2021-11-08': 0,
                          '2021-11-09': 0,
                          '2021-11-10': 0,
                          '2021-11-11': 0,
                          '2021-11-12': 0,
                          '2021-11-13': 0,
                          '2021-11-14': 0,
                          '2021-11-15': 0,
                          '2021-11-16': 2,
                          '2021-11-17': 0,
                          '2021-11-18': 0,
                          '2021-11-19': 0,
                          '2021-11-20': 0,
                          '2021-11-21': 0,
                          '2021-11-22': 3,
                          '2021-11-23': 1,
                        }
                      } }
                      formatLabels={ (label) => {
                        if (label === "unknown") return "?"
                        const parts = label.split(/-+/g)
                        return `${ parts[2] }/${ parts[1] } ${ parts[0] }`
                      } }
                      sortLabels={ (first, second) => {
                        if (first === second) return 0
                        return first > second ? -1 : 1
                      } }
                      colors={ ["#f6a47a", "#5bf13d"] }
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
