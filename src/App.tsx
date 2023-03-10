import React from 'react'
import './App.css';
// import { useMode, ColorModeContext } from './Themes';
import { CssBaseline } from '@mui/material';
// import { color, ThemeProvider } from '@mui/system';
import { Topbar } from './scenes/global/Topbar';
import {Routes, Route} from 'react-router-dom'
import { Dashboard } from './scenes/dashboard/Dashboard';
import { Sidebarr } from './scenes/global/Sidebarr';
import { Team } from './scenes/team';
import Contacts from './scenes/contacts';
// import { Invoices} from './scenes/global/Sidebarr';
// import { Bar} from './scenes/global/Sidebarr';
// import { Form } from './scenes/global/Sidebarr';
// import { Geography } from './scenes/global/Sidebarr';
// import { Pie } from './scenes/global/Sidebarr';
// import { FAQ } from './scenes/global/Sidebarr';
// import { Line } from './scenes/global/Sidebarr';
//import { Calendar } from './scenes/global/Sidebarr'



function App() {
  // const [theme, colorMode] = useMode()

  return (
    <>
    <CssBaseline/>
    <div className="app">
      <Sidebarr/>
      <main className='content'>
        <Topbar/>
        <Routes>

          <Route path='/' element={<Dashboard/>}/>
          <Route path='/team' element={<Team/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
          

         </Routes>

    

      </main>
    </div>
    </>
     
  
  
  );
}

export default App;
