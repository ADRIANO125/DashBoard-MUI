import React from 'react'
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import { Box } from "@mui/material";
import { columns, rows } from './data';
import Header from '../../components/Header';



function invoices() {
  return (
    <Box>
      <Header title={"INVOICES"} subTitle={"List of Invoices for Future Reference"} />
    <Box style={{ height: 600, width: "98%", margin: "auto" }}>
    <DataGrid
    checkboxSelection
      slots={{
        toolbar: GridToolbar,
      }}
      rows={rows}
      
      // @ts-ignore
      columns={columns}
    />
  </Box>
  </Box>
  )
}

export default invoices
