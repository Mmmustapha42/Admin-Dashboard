import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { tokens } from '../../Themes'
import { mockDataTeam } from '../../data/mockData'
import { DataGrid, GridColDef, GridToolbar, GridValueGetterParams} from '@mui/x-data-grid';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import { Header } from '../../components/Header';



export const Team = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    const columns:GridColDef[] = [
        { field: "id", headerName: "ID" },
        {
          field: "name",
          headerName: "Name",
          flex: 1,
          cellClassName: "name-column--cell",
        },
        {
          field: "age",
          headerName: "Age",
          type: "number",
          headerAlign: "left",
          align: "left",
        },
        {
          field: "phone",
          headerName: "Phone Number",
          flex: 1,
        },
        {
          field: "email",
          headerName: "Email",
          flex: 1,
        },
        {
          field: "accessLevel",
          headerName: "Access Level",
          flex: 1,
          renderCell: ({ row: { access } }:any) => {
            return (
              <Box
               width="60%"
               m="0 auto"
               p="5px"
               display="flex"
               justifyContent="center"
               bgcolor={
                access === "admin"
                ? colors.greenAccent[600]
                : access === "manager"
                ? colors.greenAccent[700]
                : colors.greenAccent[700]
               }
                >
                {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
                {access === "manager" && <SecurityOutlinedIcon />}
                {access === "user" && <LockOpenOutlinedIcon />}
                <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                  {access}
                </Typography>
              </Box>
            );
          },
        },
      ];
  return (
    <Box m='20px'>
        <Header title='TEAM' subtitle='Managing the Team Members'/>
        <Box m="40px 0 0 0"
             height="75vh">
            <DataGrid rows={mockDataTeam} columns={columns} components={{ Toolbar: GridToolbar }}></DataGrid>
        </Box>
    </Box>
  )
}
