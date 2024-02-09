

import React from 'react';
import userImage from './me.jpg'; // Update the path to your image
import { Link, Navigate } from "react-router-dom";
import Navbar from '../components/Navbar';
import './homepage.css';
// import { useLocation, useNavigate } from 'react-router-dom';
function HomePage1 () {
    // const location = useLocation()
    const [goToThePage, setGoToThePage] = React.useState(false);
    const [goToNewMeet, setGoToNewMeet] = React.useState(false);
    const [goToTheList, setGoToTheList] = React.useState(false);
    const [goToEdit, setGoToEdit] = React.useState(false);
    const [goToTheFind, setGoToTheFind] = React.useState(false);

      if(goToThePage) {
        return <Navigate to="/meetinglog"/>;
  
      }
     
      if(goToNewMeet) {
        return <Navigate to="/new"/>
      }
      
      if(goToTheList){
        return<Navigate to="/list"/>;
      }
      
      if(goToEdit) {
        return<Navigate to="/edit-logs"/>;
      }
      if(goToTheFind) {
        return<Navigate to="/find-minutes"/>;
      }


  const user = {
    name: 'Shashwat Pandey',
    username: 'shashwat123',
    email: 'a.b@example.com',
    avatar: {userImage}, // Placeholder image URL
  };

  return (
    <>
    
    <Navbar></Navbar>
    <div className='homepage1'>
    
  <div className="profile-container">
      <div className="profile-header">
        <img src={userImage} alt="User Avatar" className="avatar" />
        <h2 className='username'>{user.name}</h2>
        <p>@{user.username}</p>
      </div>
      <div className="profile-details">
        <div className="detail">
          <strong>Email:</strong> {user.email}
        </div>
        {/* Add more details as needed */}
      </div>
    </div>
    <div className="button-container">
      <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
  <button type="button" className="btn-primary1" onClick={()=>{setGoToThePage(true);}} >Meeting-Logs</button>
  <button type="button" className="btn-primary1" onClick={()=>{setGoToNewMeet(true);}} >New Meeting</button>

  <div className="btn-group" role="group">
    <button type="button" className="btn-primary1" data-bs-toggle="dropdown" aria-expanded="false">
      Other..
    </button><br />
    
    <ul className="dropdown-menu">
      <li><button className="dropdown-item"  >Settings</button>
      </li>
      <li><button className="dropdown-item" to="./">Log out</button></li>
    </ul>
  </div>

</div>

    </div> <div className= "button-container">
    <div className="btn-group" role="group" aria-label="Basic example">
  <button type="button" className="btn-primary1" onClick={()=>{setGoToTheList(true);}}>List of Employees</button>
  <button type="button" className="btn-primary1" onClick={()=>{setGoToEdit(true);}}>Edit your Logs</button>
  <button type="button" className="btn-primary1" onClick={()=>{setGoToTheFind(true);}}>Find the Minutes</button>
</div>
</div>
</div>
    </>
  );
};

export default HomePage1;



