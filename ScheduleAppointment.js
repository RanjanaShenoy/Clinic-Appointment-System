import React, { Component } from 'react';
import axios from 'axios';
import PatientsList from './PatientsList';
import patientService from '../service/patientService';
import './FormStyle.css';

  
class scheduleAppointment extends Component {

  constructor(props) {
    super(props)

    this.initialstate = {
      p_sno:"",
      p_name:"",
      doctor_name:"",
      p_datetime:"",


      items : [],
      DataisLoaded: false
  };

  if(props.appointment)
  {
    this.state=props.appointment;
    console.log("Appointment"+props.appointment);
    
  }
  else{
    this.state=this.initialstate
  }

  this.componentDidMount=this.componentDidMount.bind(this);
  
  }
 
  componentDidMount(){
  fetch(
    "http://localhost:8080/api/v1/patients/")
    .then((res) => res.json())
    .then((json) => {
      this.setState({
        items: json,
        DataisLoaded: true
      });
    })
     

  }


  getPatientById= async id =>{
  
    console.log("get patient by id");
    var patientsInfo = await axios.get(`http://localhost:8080/api/v1/patients/${id}`);
    var pat_data=patientsInfo.data.name;
    console.log("name: "+pat_data);
    this.state.p_name=pat_data;
    
}



  onSerialInputChange = e =>{
    console.log("in the func");
    this.setState({
     p_sno:e.target.value
    
  })
 
  this.getPatientById(e.target.value);     
  }

  onNameInputChange = e =>{
    this.setState({
    p_name:e.target.value    
  })
      
  }

  onDoctorInputChange = e =>{
    this.setState({
     doctor_name:e.target.value    
  })
      
  }

  onDateInputChange = e =>{
    this.setState({
     p_datetime:e.target.value    
  })
      
  }

  onSubmit = e =>{

    const appointment={
      "p_sno":this.state.p_sno,
      "p_name":this.state.p_name,
      "doctor_name":this.state.doctor_name,
      "p_datetime":this.state.p_datetime
        }


    console.log("data set: "+this.state.p_sno+" "+this.state.p_name+" "+this.state.doctor_name+" "+this.state.p_datetime);
   var patientInfo = axios.get(URL);

    console.log();
    console.log("appointment: "+ JSON.stringify(appointment));



if(appointment)
{
            fetch("http://localhost:8080/api/v1/appointment",{
            method:"POST",
            headers:{"Content-type":"application/json"},
             body:JSON.stringify(appointment)
             }).then(()=>{}) 

              console.log(appointment);
}
else{
   window.alert("error!!!");
}
    
  }
  
  onCancel = e =>{
    this.state=this.initialstate
  }
  
 
  
render() {

  let {p_sno, p_name,doctor_name, p_datetime,  DataisLoaded, items } = this.state
 

return (
      <div>
      <form className='form-style'>
          <div className='form-control' id='top-element'>
            <p id="heading">Schedule Appointment</p>
          <p></p>
          </div>

          <div className='form-control'>
          <pre>
                <label id="font-control">   Patient Serial No:  </label>
                
                <select value={this.state.p_sno} name="serial_no" onChange={this.onSerialInputChange} className='element-control'>
                {items.map((item) => (
                  <option value={item.serial_no}>{item.serial_no}</option> 
                    
                ))} 
                  </select>
             </pre>
          </div>

          <div>
          <pre>
      <label id="font-control">     Patient Name:</label>
        <input  type="text" name="name" value={this.state.p_name} onChange={this.onNameInputChange} className='element-control'/>
        </pre>
        </div>

        


      <div className='form-control'>
        <pre>
            <label id="font-control">   Doctor Name: </label>
            
            <select value={this.state.doctor_name} name="doctor" onChange={this.onDoctorInputChange} className='element-control'>
                        <option value="Dr.Harshith">Dr.Harshith</option>
                        <option value="Dr.Prathiba">Dr.Prathiba</option>
                        <option value="Dr.Nisha">Dr.Nisha</option>
                        <option value="Dr.Arvind">Dr.Arvind</option>
                        <option value="Dr.Nithin">Dr.Nithin</option>
                        <option value="Dr.Nicholas">Dr.Nicholas</option>
            </select>
            </pre>
            </div>

        
        
        <div className='form-control'>
        <pre>
        <label id="font-control">   Date-Time:  </label>
        <input type="datetime-local" value={this.state.p_datetime} name="date_time" onChange={this.onDateInputChange} className='element-control' />
        </pre>
        </div>
        
        <div className='form-control'>
        <button type="submit" className="submit-style"  onClick={this.onSubmit}>Submit</button>
         &nbsp;&nbsp;

        <button type="reset" className="cancel-style"  onClick={this.onCancel}>Cancel</button>
        
        </div>
        
      </form>
      </div>
    )
  }
  }

  export default scheduleAppointment;
