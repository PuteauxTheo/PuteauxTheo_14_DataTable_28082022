import React from 'react';
import DataTable from './DataTables/index.js';
import { exempleLabels, exempleData } from './exempleData.js';


export default function App() {
  return (
    <div className="app">
      <DataTable labels={exempleLabels} data={exempleData} />
    </div>
  );
};
