import React from 'react'
import HomeOutLinedIcon from '@mui/icons-material/HomeOutlined'
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";


interface SidebarItem {
    title: string,
    icon: React.ReactNode
    link: string;
  }

  type Sidebar = {
    name: {
    title:'string',
    icon: React.ReactNode,
    link:string
}[]
  }


export const SidebarData = [
    {
        title:'Home',
        icon:<HomeOutLinedIcon/>,
        link:'/home'
    },
    {
        title:'Home',
        icon:<ContactsOutlinedIcon/>,
        link:'home'
    },
    {
        title:'Home',
        icon:<ReceiptOutlinedIcon/>,
        link:'/home'
    },
    {
        title:'Home',
        icon:<PersonOutlinedIcon/>,
        link:'/home'
    },
    {
        title:'Home',
        icon:<PeopleOutlinedIcon/>,
        link:'/home'
    },
    {
        title:'Home',
        icon:<CalendarTodayOutlinedIcon/>,
        link:'/home'
    },
    {
        title:'Home',
        icon:<HelpOutlineOutlinedIcon/>,
        link:'/home'
    },
    {
        title:'Home',
        icon:<BarChartOutlinedIcon/>,
        link:'/home'
    },
    {
        title:'Home',
        icon:<PieChartOutlineOutlinedIcon/>,
        link:'/home'
    },
    {
        title:'Home',
        icon:<TimelineOutlinedIcon/>,
        link:'/home'
    },
    {
        title:'Home',
        icon:<MenuOutlinedIcon/>,
        link:'/home'
    },
    {
        title:'Home',
        icon:<MapOutlinedIcon/>,
        link:'/home'
    },
]
 
