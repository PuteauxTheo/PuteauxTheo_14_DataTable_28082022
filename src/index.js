import React from "react";
import { createRoot } from "react-dom/client"

import DataTable from './lib/index.js';
import { exempleLabels, exempleData } from './exempleData.js';

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<DataTable labels={exempleLabels} data={exempleData} />)