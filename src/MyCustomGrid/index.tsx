import React, {useMemo, useState} from 'react';
import './styles.css';

import {columns, rows} from "./data";

import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const MyCustomGrid: React.FC = () => {
  const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);

  const [rowData] = useState(rows);
  const [columnDefs] = useState(columns);

  return (
    <div style={containerStyle}>
      <div style={gridStyle} className="ag-theme-alpine">
        <div className="ag-theme-alpine" style={{height: 300}}>
          <AgGridReact
            defaultColDef={{
              sortable: true,
            }}
            rowData={rowData}
            columnDefs={columnDefs}
          >
          </AgGridReact>
        </div>
      </div>
    </div>
  );
};

export default MyCustomGrid;