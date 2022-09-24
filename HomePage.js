import React,{Component} from 'react';
import PatientsList from './PatientsList';
import './HomePage.css';
import New_Patient from './New_Patient';
import ScheduleAppointment from './ScheduleAppointment';
import EditDetails from './EditDetails';
import ViewAppointment from './ViewAppointment';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const HomePage =()=>{
 
  
    return(
      <div className='router-style'>
            <Router>
              <Link to="/PatientsList" className='link-style'>
              <button className='list-style'>
              View Registered 
              </button>
              </Link> 
              
              <Link to="/AddPatient" className='link-style'>
              <button className='list-style'>
              Add Patient
              </button>
              </Link> 
              
              <Link to="/scheduleAppointment" className='link-style'>
              <button className='list-style'>
              Appointment
              </button>
              </Link> 

              <Link to="/viewAppointment" className='link-style'>
              <button className='list-style'>
              View Appointments
              </button>
              </Link> 

             
              

                <Switch>
                <Route exact path='/PatientsList'><PatientsList/></Route>
                </Switch>
                <Switch>
                <Route exact path='/AddPatient'><New_Patient/></Route>
                </Switch>
                <Switch>
                <Route exact path='/scheduleAppointment'><ScheduleAppointment/></Route>
                </Switch>
                <Switch>
                <Route exact path='/viewAppointment'><ViewAppointment/></Route>
                </Switch>

                <Switch>
                <Route exact path='/update-patients/:id'><EditDetails/></Route>
              </Switch>
              

                
          </Router>
          <br/>
      </div>
  );
  } 
/*

              */


export default HomePage;

