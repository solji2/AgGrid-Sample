import { Box } from "@mui/material";
import { AgGridReact } from "ag-grid-react";
import React, { useEffect, useState } from "react";

const GridExample = () => {
  const [rowDatas, setRowDatas] = useState([]);

  const dateFormatter = (params) => {
    return new Date(params.value).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const compantLogoRenderer = (value) => {
    <span
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        alignItems: "center",
      }}
    >
      {value && (
        <img
          alt={`${value} Flag`}
          src={`https://www.ag-grid.com/example-assets/space-company-logos/${value.toLowerCase()}.png`}
          style={{
            display: "block",
            width: "25px",
            height: "auto",
            maxHeight: "50%",
            marginRight: "12px",
            filter: "brightness(1.1)",
          }}
        />
      )}
      <p
        style={{
          textOverflow: "ellipsis",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        {value}
      </p>
    </span>;
  };

  const [columns, setColumns] = useState([
    {
      field: "mission",
      checkboxSelection: true,
    },
    {
      field: "company",
    },
    {
      field: "location",
    },
    {
      field: "date",
      valueFormatter: dateFormatter,
    },
    {
      field: "time",
    },
    {
      field: "rocket",
    },
    {
      field: "price",
      valueFormatter: (params) => {
        debugger;
        return "£" + params.value.toLocaleString();
      },
    },
    {
      field: "successful",
    },
  ]);

  useEffect(() => {
    fetch("https://www.ag-grid.com/example-assets/space-mission-data.json")
      .then((result) => result.json())
      .then((rowData) => setRowDatas(rowData));
  }, []);

  return (
    // <div>
    <Box
      className={"ag-theme-quartz-dark"}
      sx={{
        width: "100%",
        height: "500px",
        p: 1,
      }}
    >
      <AgGridReact columnDefs={columns} rowData={rowDatas} />
    </Box>
    // </div>
  );
};

export default GridExample;
