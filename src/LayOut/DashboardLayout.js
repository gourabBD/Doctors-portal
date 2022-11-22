import React from 'react';
import NavBar from './../Pages/Shared/NavBar/NavBar';
import {Link, Outlet} from "react-router-dom";
import useAdmin from './../hooks/useAdmin';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';

const DashboardLayout = () => {
  const {user} = useContext(AuthContext)
  const [isAdmin] =useAdmin(user?.email)
    return (
        <div>
            <NavBar></NavBar>
            <div className="drawer drawer-mobile">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">

  <Outlet></Outlet>

  
    
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80  text-base-content">
     
      <li><Link to={'/dashboard'}>My Appointments</Link></li>
     {
      isAdmin && <>
      <li><Link to={'/dashboard/allusers'}>All Users</Link></li> 
      <li><Link to={'/dashboard/adddoctor'}>Add A Doctor</Link></li> 
      <li><Link to={'/dashboard/managedoctors'}>Manage Doctors</Link></li> 
      </>
      }
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default DashboardLayout;