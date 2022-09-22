# Data-Table plugin for React 

A ready-to-use DataTable component for React projects. It adds features to manipulate data easily.

## Features

- Display entries with select ( 10 / 25 / 50 / 100 )
- Searching accross all entries
- Sorting columns by ascending or descending 
- DataTable adapting his entries with number of display data

## Installation

### Download

[data-table-react-plugin](https://www.npmjs.com/package/data-table-react-plugin)

### Requirements

- React 17.0.2+

- using NPM
  `npm install data-table-react-plugin`

- using yarn
  `yarn add data-table-react-plugin`

### Usage

To use the plugin, import it in your React component.
It needs 2 props to work: `labels` and `data`

dataTableComponent.js_

```javascript
import DataTable from "data-table-react-plugin";
import { labels, data } from "./examplesData";
const Component = () => {
  <DataTable labels={labels} data={data} />;
};
```

examplesData.js_

```javascript
const exempleLabels = [
    { text: "First Name", value: "firstName" },
    { text: "Last Name", value: "lastName" },
    { text: "Start Date", value: "startDate" },
    { text: "Date of Birth", value: "dateOfBirth" },
    { text: "Department", value: "department" },
    { text: "Street", value: "street" },
    { text: "City", value: "city" },
    { text: "State", value: "state" },
    { text: "Zip Code", value: "zipCode" },
];

const exampleData = [
  {
        firstName: "Elon",
        lastName: "Musk",
        startDate: "04/14/2021",
        dateOfBirth: "28/06/1971",
        department: "Marketing",
        street: "Main Street",
        city: "NY",
        state: "AL",
        zipCode: "01800",
      },
      {
        firstName: "Tim",
        lastName: "Cook",
        startDate: "03/02/2020",
        dateOfBirth: "01/11/1960",
        department: "Sales",
        street: "Helia Street",
        city: "San Francisco",
        state: "AK",
        zipCode: "85699",
      },
];
export { exampleLabels, exampleData };
```

### API

DataTable needs 2 props:

- `data` that contains the data for the rows
- `labels` that defines the name of the columns

The keys of each object element in the `data` array should be the same as the `value` keys of each label element of the `labels` array.

_DataTable props_

- `data` array of objects containing a single row
- `labels` array of objects with the labels of the columns

_data_

```javascript
[
  {
    columnName1: "text1",
    columnName2: "text2",
    columnName3: "text3",
  },
  {
    columnName1: "text1",
    columnName2: "text2",
    columnName3: "text3",
  },
];
```

_labels_

```javascript
[
  { text: "Column Name 1", value: "columnName1" },
  { text: "Column Name 2", value: "columnName2" },
  { text: "Column Name 3", value: "columnName3" },
];
```