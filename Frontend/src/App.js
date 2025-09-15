import './App.css';
import { createTheme, Divider, MantineProvider, Notification } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import Header from './Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import FindJobs from './Pages/FindJobs';
import Footer from './Footer/Footer';
import FindTalentPage from './Pages/FindTalentPage';
import TalentProfilePage from './Pages/TalentProfilePage';
import PostJobPage from './Pages/PostJobPage';
import '@mantine/tiptap/styles.css';
import JobDescPage from './Pages/JobDescPage';
import ApplyJobPage from './Pages/ApplyJobPage';
import CompanyPage from './Pages/CompanyPage';
import PostedJobPage from './Pages/PostedJobPage';
import '@mantine/dates/styles.css';
import JobHistoryPage from './Pages/JobHistoryPage';
import SignUp from './SignUpLogin/SignUp';
import SignUpPage from './Pages/SignUpPage';
import Profile from './Profile/Profile';
import ProfilePage from './Pages/ProfilePage';
import '@mantine/notifications/styles.css';
import { Notifications } from '@mantine/notifications';
import { Provider } from 'react-redux';
import Store from './Store';
import AppRoutes from './Pages/AppRoutes';
import { AuthProvider } from './Interceptor/AuthContext';
import { setupResponseInterceptor } from './Interceptor/AxiosInterceptor';
import AuthCheck from './Pages/AuthCheck';
import { useState } from 'react';


function App() {
  const [mode, setMode] = useState("false");

  const theme = createTheme({
    focusRing:"never",
    fontFamily:"Poopins,sans-serif",
    primaryColor:'brightSun',
    primaryShade:4,
    colors:{
      //Dark Mode
      // 'mineShaft': 
      // ['#f6f6f6','#e7e7e7','#d1d1d1','#b0b0b0','#888888','#6d6d6d','#5d5d5d','#4f4f4f','#454545','#3d3d3d','#2d2d2d',],
      // 'brightSun':
      // ['#fffbeb','#fff3c6','#ffe588','#ffd149','#ffbd20','#f99b07','#dd7302','#b75006','#943c0c','#7a330d','#461902',],
    

      //Light Mode
      'mineShaft': ['#f5f7fa', '#eaeff4', '#cfdce8', '#a6bfd3','#759cbb', '#5480a3', '#416788','#35526f', '#2f475d', '#2c3e50', '#1d2834'],
      'brightSun': [ '#f1fcf5', '#defaea', '#bef4d4','#8beab2','#52d689','#27ae60', '#1d9c53', '#1a7b43', '#1a6139','#175031', '#072c18'],

    
    
    },
    fontFamily:"poppins,sans-serif"
  })
  return (
    <Provider store={Store}>
    <MantineProvider defaultColorScheme={mode ? "dark" : "light"} theme={theme}>
      <Notifications position="top-center" zIndex={1000} />
      <AuthCheck />
      <AppRoutes />

      <FontAwesomeIcon />
    </MantineProvider>
    </Provider>
  );
}

export default App;
