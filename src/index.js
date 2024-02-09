import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MeetingLog from './pages/MeetingLog';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage1 from './pages/HomePage1';
import NewMeeting from './pages/NewMeeting';
import ListEmp from './pages/ListEmp';
import EditLog from './pages/EditLog';
import FindMinutes from './pages/FindMinutes';
import Signup from './Signup';
// import Offcanvas from './OffCanvas';
// import OffCanvas from './OffCanvas';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  
  {
    path: "/signup",
    element: <Signup/>,
  },
  
  {
    path: "/homepage",
    element: <HomePage1/>,
  },
  {
    path:  "/meetinglog",
    element: <MeetingLog/>,
  },
  
  {
    path:  "/new",
    element: <NewMeeting/>,
  },

  {
    path: "/list",
    element: <ListEmp/>,
  },

  {
    path: "/edit-logs",
    element: <EditLog/>,
  },
  {
    path: "/find-minutes",
    element: <FindMinutes/>,
  }
  // {
  //   path: "/settings",
  //   element: <OffCanvas/>,
  // }
 



]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
