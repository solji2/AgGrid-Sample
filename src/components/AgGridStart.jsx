import React from "react";
//react gird 의존성 import
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import { useState } from "react";
import { Box, Container } from "@mui/material";

const AgGridStart = () => {
  const [colDefs, setColDefs] = useState([
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "eelectric" },
  ]);

  const [rowDatas, setRowDatas] = useState([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Mercedes", model: "EQA", price: 48890, electric: true },
    { make: "Fiat", model: "500", price: 15774, electric: false },
    { make: "Nissan", model: "Juke", price: 20675, electric: false },
  ]);

  return (
    <Container maxWidth="md">
      <Box
        className={"ag-theme-quartz-dark"}
        sx={{
          width: "100%",
          height: "350px",
          p: 1,
        }}
      >
        <AgGridReact columnDefs={colDefs} rowData={rowDatas} />
      </Box>
    </Container>
    // <div
    //   className={"ag-theme-quartz-dark"}
    //   style={{ width: "100%", height: "100%" }}
    // >
    //   <AgGridReact
    //     rowData={rowDatas}
    //     columnDefs={colDefs}
    //     //defaultColDef={defaultColDef}
    //   />
    // </div>
  );
};

export default AgGridStart;
