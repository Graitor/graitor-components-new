import './App.css'
import { GraitorChart, GraitorDropdown } from "./lib";
import ShowCase from "./ShowCase";
import { useState } from "react";


const App = () => {

  const [ddValue, setDDValue] = useState({ key: 'en', value: 'English' })

  return (
    <div className="App">
      <ShowCase title={"Chart"}>
        <GraitorChart id={"chart"}
                      title={"Graitor bar chart"}
                      defaultType={"bar"}
                      dataset={{
                        '2021-10-17': 1,
                        '2021-10-18': 4,
                        '2021-10-19': 150,
                      }}
                      formatLabels={(label) => {
                        if (label === "unknown") return "?"
                        const parts = label.split(/-+/g)
                        return `${parts[2]}/${parts[1]} ${parts[0]}`
                      }}
        />
      </ShowCase>
      <ShowCase title={"Dropdown"} style={{ display: 'flex', justifyContent: 'space-between' }}>
        <GraitorDropdown title={"Language"}
                         defaultItem={ddValue}
                         options={[
                           { key: 'da', value: 'Dansk' },
                           { key: 'en', value: 'English' },
                           { key: 'de', value: 'Deutsch' },
                           { key: 'sk', value: 'Slovenčina' },
                         ]}
                         onChange={(oldValue, newValue) => {
                           setDDValue(newValue)
                         }}
        />
        Value: { ddValue.key }
      </ShowCase>
    </div>
  )
}

export default App;
