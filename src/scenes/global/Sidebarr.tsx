import React from 'react'
import { useState } from 'react'
import { Menu, MenuItem, Sidebar, SubMenu} from 'react-pro-sidebar'
import { Box, Button, IconButton, Stack, Typography,useTheme } from '@mui/material'
import { Link } from 'react-router-dom'
import { tokens } from '../../Themes'
import { SidebarData } from './SidebarData'


interface SidebarItem {
  title: string,
  icon: React.ReactNode
  link: string;
}



export const Sidebarr = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [selected, setSelected] = useState("Dashboard")
  return (
    <Box sx={{backgroundColor:'#2f4050', height:'150vh', width:'250px'}}>
      <Box>
        <Typography>Mustapha</Typography>
      </Box>
      {SidebarData.map((items, index) => {
        return (
          <Stack  key={index} direction='column' alignItems='center' margin='35px'>
               <Stack direction='row' spacing={3}>
                <Box>{items.icon}</Box>
                <Box>{items.title}</Box>
               </Stack>
          </Stack>
        )
      })}
    </Box>
  )
}
