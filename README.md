# Graitor Components :recycle:

United library for Graitor components.

:exclamation: CONTRIBUTORS WANTED :exclamation:

#### Install
```
yarn add graitor-components
```
```
npm i graitor-components
```


### React
Works out of the box. Plug and play.

### Vue
[Vuera](https://www.npmjs.com/package/vuera#react-in-vue---preferred-usage) plugin is required for the React code migration

## Available components:
- GraitorChart :chart_with_upwards_trend:
  - id (required, string) - ID of the chart
  - title (required, string) - Title of the chart
  - dataset (required, object<label: string, data: <string, number>) - Data to be displayed, multiple datasets support
  - defaultType (optional, string) - Default chart type
  - allowedTypes (optional, array[line, vbar, hbar, pie]) - Allowed subarray of chart types
  - colors (optional, string[]) - Color pallet to be used for the chart
  - formatLabels (optional, function) - Format labels
  - sortLabels (optional, function) - Sort labels, default sort alphabetically
  - notes: 
    - hbar type always displays all Y labels, thus its height is dynamic
    - pie chart type not supported with multiple datasets
    - to ignore default sort sortLabels parameter needs to be provided, ex: () => 1
  - example:
```javascript
<GraitorChart id={"chart"}
              title={"Graitor bar chart"}
              defaultType={"vbar"}
              allowedTypes={["vbar", "line"]}
              dataset={{
                label: 'My Graitor Label',
                data: {
                  '2021-10-17': 1,
                  '2021-10-18': 4,
                  '2021-10-19': 150,
                }
              }}
              colors={["#f6a47a", "#5bf13d"]}
              formatLabels={(label) => {
                if (label === "unknown") return "?"
                const parts = label.split(/-+/g)
                return `${parts[2]}/${parts[1]} ${parts[0]}`
              }}
              sortLabels={(first, second) => {
                if (first === second) return 0
                return first > second ? -1 : 1
              }}
/>
```
- GraitorDropdown
  - title (required, string) - Title of the dropdown
  - options (required, Item[]) - Array of items
  - defaultItem (optional, Item) - Item to be set as the default
  - onChange (optional, function) - Function to be executed on every change
  - example:
```javascript
<GraitorDropdown title={"Language"}
                 defaultItem={{ key: 'en', value: 'English' }}
                 options={[
                   { key: 'da', value: 'Dansk' },
                   { key: 'en', value: 'English' },
                   { key: 'de', value: 'Deutsch' },
                   { key: 'sk', value: 'Slovenčina' },
                 ]}
                 onChange={(oldValue, newValue) => {
                   setValue(newValue)
                 }}
/>
```
- GraitorSearch
```
comming soon
```
- GraitorFilter
```
comming soon
```
- GraitorPeriodPicker
```
comming soon
```
- GraitorTable
```
comming soon
```
- GraitorStorage
```
comming soon
```
- GraitorRequest
```
comming soon
```