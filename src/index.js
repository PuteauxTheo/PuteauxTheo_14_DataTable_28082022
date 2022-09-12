import React from 'react';
import ReactDOM from 'react-dom/client';
import DataTable from './DataTables/index.js';
import { exempleLabels, exempleData } from './exempleData.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataTable labels={exempleLabels} data={exempleData}/>
  </React.StrictMode>
);
