import React, {useMemo, useState} from 'react';
import './styles/index.css';
import {columns, rows} from "./data";

import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import {WithTranslation} from "react-i18next";

const Grid: React.FC<WithTranslation> = ({ t }: any) => {
  const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);

  const [rowData] = useState(rows(t));
  const [columnDefs] = useState(columns(t));

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

export default Grid;