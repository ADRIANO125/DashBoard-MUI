import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./data";
import { Box, Typography, useTheme } from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import Header from '../../components/Header'



function Team() {
  const theme = useTheme();

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 30,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "age",
      headerName: "Age",
      width: 33,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "phone",
      headerName: " Phone",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "access",
      headerName: "Access",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {

        return (
          
          <Box
            sx={{
              margin: "auto",
              cursor: "pointer",
              width: "99px",
              padding: "5px",
              display: "flex",
              textAlign: "center",
              alignItems: "center",
              mt: 1.3,
              justifyContent: "space-evenly",
              borderRadius: "5px",
              backgroundColor: access === "Admin" ? theme.palette.primary.dark : access === "Manager" ? theme.palette.secondary.dark : "#3da58a",
            }}
          >
            {access==="Admin" &&  (
              <AdminPanelSettingsOutlined
                sx={{ color: "#fff", fontSize: "16px" }}
              />
            )}
            {access==="Manager" && (
              <SecurityOutlined sx={{ color: "#fff", fontSize: "16px" }} />
            )}
            {access==="User" && (
              <LockOpenOutlined sx={{ color: "#fff", fontSize: "16px" }} />
            )}
            <Typography sx={{ fontSize: "14px" }} color="#fff">
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <Box>
      <Header title={"TEAM"} subTitle={"Managing the Team Members"}/>
    <Box style={{ height: 600, width: "98%", margin: "auto" }}>
      <DataGrid
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
    </Box>
  );
}

export default Team;
