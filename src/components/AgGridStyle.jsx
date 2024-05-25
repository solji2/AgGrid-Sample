import React, { useMemo, useState } from "react";
import { Box, Container } from "@mui/material";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import "../agGridstyles.css";

const AgGridStyle = () => {
  const ragCellClassRules = {
    "rag-green": (params) => params.value === true,
  };

  const rowClassRules = useMemo(() => {
    return {
      // apply red to Ford cars
      "rag-red": (params) => params.data.make === "Ford",
    };
  }, []);

  const [columnDefs, setColumnDefs] = useState([
    {
      field: "make",
      checkboxSelection: true,
    },
    {
      field: "model",
    },
    { field: "price", filter: "agNumberColumnFilter" },
    { field: "electric", cellClassRules: ragCellClassRules },
  ]);

  const [rowData, setRowData] = useState([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Mercedes", model: "EQA", price: 48890, electric: true },
    { make: "Fiat", model: "500", price: 15774, electric: false },
    { make: "Nissan", model: "Juke", price: 20675, electric: false },
    { make: "Vauxhall", model: "Corsa", price: 18460, electric: false },
    { make: "Volvo", model: "EX30", price: 33795, electric: true },
    { make: "Mercedes", model: "Maybach", price: 175720, electric: false },
    { make: "Vauxhall", model: "Astra", price: 25795, electric: false },
    { make: "Fiat", model: "Panda", price: 13724, electric: false },
    { make: "Jaguar", model: "I-PACE", price: 69425, electric: true },
  ]);

  return (
    <Container maxWidth="md">
      <Box
        className={"ag-theme-quartz-dark"}
        sx={{
          width: "100%",
          height: "500px",
          p: 1,
        }}
      >
        <AgGridReact
          columnDefs={columnDefs}
          rowData={rowData}
          rowSelection="multiple"
          rowClassRules={rowClassRules}
        />
      </Box>
    </Container>
  );
};

export default AgGridStyle;
