import React, { Component, useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import patientService from '../service/patientService';
import './FormStyle.css';



function EditDetails(){
  const {id}= useParams();
  const URL=`http://localhost:8080/api/v1/patients/${id}`;
  var patientsInfo;

  useEffect(()=>{
    getPatientById();
  },[])



  const [patient, setPatient] = useState({
    name:"",
    phone:"",
    gen:"select",
    address:"",
    email:"",
  
});


var { name ,phone, gen, address, email} = patient;


const getPatientById= async e =>{
    patientsInfo = await axios.get(URL);
    console.log("info: ",patientsInfo.data);
    patient.name=patientsInfo.data.name;
    patient.address=patientsInfo.data.address;
    patient.phone=patientsInfo.data.phone;
    patient.gen=patientsInfo.data.gen;
    patient.email=patientsInfo.data.email;
    console.log("pat data"+patient.name+" "+patient.address+" "+patient.email+" "+patient.gen+" "+patient.phone);
    
    
}
   
 

  const onInputChange = e =>{
      setPatient({...patient,[e.target.name]:e.target.value})
      
  }

  const FormHandle = e =>{
    

 console.log("set data: " +patient.name+" "+patient.gen+" "+patient.address+" "+patient.email+" "+patient.phone);

 console.log("Patient: "+JSON.stringify(patient));

try{

    const res = axios.put(URL,patient);
   
    console.log("res: ",res);
    } catch (err) {
        if (err.response.status === 404) {
            console.log('Resource could not be found!');
        } else {
            console.log(err.message);
        }
    }
    
    

}


const onCancel=(e)=>{
    setPatient("");
}

  return (
    <div>
    <div className="form-style">
            <p id="heading">Update Patients</p>
            <div>
            <form onSubmit={e => FormHandle(e)}>
                <div className=''>
                    <pre>
                    <label id="font-control">    Name</label>
                    <input type="text" className="form-control" name="name"  value={patient.name} onChange={(e) =>onInputChange(e)} />
                    </pre>
                </div>
                <div className="form-group">
                <pre>
                    <label id="font-control">    Phone</label>
                    <input type="number" className="form-control" name="phone" value={patient.phone} onChange={(e) =>onInputChange(e)} />
                    </pre>
                </div>
  
                <div className="form-group">
                <pre>
                <label id="font-control">    Gender</label>
                <select value={patient.gen} name="gen" onChange={(e) =>onInputChange(e)} className='element-control'>
                        <option value="select">select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
               </select>
               </pre>
               </div>


                <div className="form-group">
                <pre>
                    <label id="font-control">    Address</label>
                    <input type="textarea" className="form-control" name="address"  value={patient.address} onChange={(e) =>onInputChange(e)}  />
                </pre>
                </div>
                <div className="form-group">
                <pre>
                    <label id="font-control">    Email</label>
                    <input type="email" className="form-control" name="email"  value={patient.email} onChange={(e) =>onInputChange(e)}  />
                </pre>
                </div>
                <div className="container text-center">
                <button type="submit" className='submit-style' onClick={e => FormHandle(e)}>Update Patient</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <button type="reset" className='cancel-style' onClick={(e) =>onCancel(e)}>Clear</button>
                </div>
            </form>
        </div>
    </div>
    </div>
  )
}

export default EditDetails
