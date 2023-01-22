import React, {useMemo, useState} from 'react';
import {columns, rows} from "./data";
import {AgGridReact} from "ag-grid-react";
import Tablet from "./Tablet";
import { WithTranslation } from 'react-i18next';
import i18next from "i18next";
import {Container, GridContainer, GridWrapper, InfoIcon} from "./styles/GridTablet";

const GridTablet: React.FC<WithTranslation> = ({ t }) => {
  const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
  const gridStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
  const wrapperStyle = useMemo(() => ({ width: '412px', height: '130px' }), []);

  const [isOpen, setIsOpen] = useState(false);
  const [rowData] = useState(rows(t));
  const [columnDefs] = useState(columns(t));

  const handleClickOpen = () => setIsOpen(!isOpen);

  return (
    <Container style={containerStyle}>
      <GridContainer style={gridStyle} className="ag-theme-alpine">
        <GridWrapper className="ag-theme-alpine" style={wrapperStyle}>
          <InfoIcon style={{ background: isOpen ? 'green' : 'red' }} onClick={handleClickOpen} />
          {isOpen
            ? <Tablet t={t} i18n={i18next} tReady />
            : ''
          }
          <AgGridReact
            defaultColDef={{
              sortable: true,
            }}
            rowData={rowData}
            columnDefs={columnDefs}
            tooltipShowDelay={0}
            tooltipHideDelay={2000}
          >
          </AgGridReact>
        </GridWrapper>
      </GridContainer>
    </Container>
  );
};

export default GridTablet;