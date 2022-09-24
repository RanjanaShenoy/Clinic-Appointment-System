
import React, { Component } from 'react';
import './FormStyle.css';
import PatientsList from './PatientsList.js';

class New_Patient extends Component {
  constructor(props) {
    super(props)

    //this.state = {value: ''};
    this.initialstate = {
        id:'',
       name:'',
       phone:'',
       gender:'select',
       address:'',
       email:''
    }

    if(props.patient)
    {
      this.state=props.patient;
      console.log("patient "+props.patient);
      
    }
    else{
      this.state=this.initialstate
    }

    
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCancel=this.onCancel.bind(this);
  }

  handleNameChange = (event) =>{
    
    this.setState({
        name:event.target.value    
    })

    if (event.target.value==='')
    {
      window.alert("Name is required!");
    } 
  }

  handlePhoneChange = (event) =>{
    this.setState({
        phone:event.target.value
    })
    if (event.target.value==='')
    {
      window.alert("Phone is required!");
    }
  }
  handleGenderChange = (event) =>{
  
    this.setState({
        gender:event.target.value
    })
    if (event.target.value==='')
    {
      window.alert("Select the required!");
    }
  }
  handleAddressChange = (event) =>{
    
    this.setState({
        address:event.target.value
    })
    if(event.target.value==='')
    {
      window.alert("Address is required!");
    }

  }
  handleEmailChange = (event) =>{
  
    this.setState({
       email:event.target.value
    })
    
    if(event.target.value==='')
    {
      window.alert("Email is required!");
    }
    
  }

  onSubmit =(event) =>{
    const name_regex= /^[A-Z]+[a-z]*[a-z]*/i;
    const phone_regex=/[0-9]{10}/;
    const address_regex=/[0-9]*[A-Z]/i;
    const email_regex=/[a-z]+_?[a-z]?_?[0-9]*@[a-z]+.com$/i;
    //const email_regex= /[\d*\w+\d*]@[\w+].{com}$/i;

        const patient={
            "name":this.state.name,
            "phone":this.state.phone,
            "address":this.state.address,
            "gen":this.state.gender,
            "email":this.state.email
        }

        if(this.state.name===''|| this.state.phone==='' || this.state.gen==='select' || this.state.address==='' || this.state.email==='')
        {
            window.alert("Data cannot be empty!!");
            //document.getElementById("name").innerHTML='Data cannot be empty!!';
            event.preventDefault();
            return;
        }
      else if(!patient.name.match(name_regex))
      {
        //window.alert("Enter the correct name");
        document.getElementById("name").innerHTML='Enter the correct name';
      }
      else if(!patient.phone.match(phone_regex))
      {
        //window.alert("Enter the correct phone number");
        document.getElementById("phone").innerHTML='Enter the correct phone number';
      }
      else if(!patient.address.match(address_regex))
      {
        //window.alert("Enter the correct address");
        document.getElementById("address").innerHTML='Enter the correct address';
      }
      else if(!patient.email.match(email_regex))
      {
        //window.alert("Enter the correct email");
        document.getElementById("email").innerHTML='Enter the correct email';
      }

      /*
      else if(patient.name.match(name_regex))
      {
        //window.alert("Enter the correct name");
        document.getElementById("name").innerHTML='';
      }
      else if(patient.phone.match(phone_regex))
      {
        //window.alert("Enter the correct phone number");
        document.getElementById("phone").innerHTML='';
      }
      else if(patient.address.match(address_regex))
      {
        //window.alert("Enter the correct address");
        document.getElementById("address").innerHTML='';
      }
      else if(patient.email.match(email_regex))
      {
        //window.alert("Enter the correct email");
        document.getElementById("email").innerHTML='';
      }
        */

      else{
            fetch("http://localhost:8080/api/v1/patients",{
            method:"POST",
            headers:{"Content-type":"application/json"},
             body:JSON.stringify(patient)
             }).then(()=>{}) 
              window.alert("New Patient Added!");        
        }

    console.log(this.state.name+" "+this.state.phone+" ");
   console.log(this.state.address+" "+this.state.gender+" " +this.state.email+" ");
  }

  onCancel = (event) =>{
    this.setState({
        name:'',
        phone:'',
        address:'',
        gender:'',
        email:''
    })

  }

    render() {

        let {name,phone,gender, address, email} = this.state

    return (
      <div className='form-style'>
          <form>
              <div className='form-control' id='top-element'>
                <p id="heading">Register new Patient</p>
              <p id='name'></p>
              <pre>
          <label id="font-control">   Name:&nbsp; &nbsp;</label>
            <input  type="text" name="name" value={this.state.name} onChange={this.handleNameChange} className='element-control'/>
            </pre>
            </div>
            
            <div className='form-control'>
            <p id='phone'></p>
            <pre>
            <label id="font-control">   Phone: &nbsp;</label>
            <input type="number" name="phone" value={this.state.phone} onChange={this.handlePhoneChange} className='element-control'/>
            </pre>
            </div>

            <div className='form-control'>
            <pre>
            <label id="font-control">   Gender: &nbsp;</label>
            
            <select value={this.state.gender} name="gender" onChange={this.handleGenderChange} className='element-control'>
                        <option value="select">select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
            </select>
            </pre>
            </div>

            <div className='form-control'>
            <p id='address'></p>
            <pre>
            <label id="font-control">   Address: &nbsp;</label>
            <textarea value={this.state.address} name="address" onChange={this.handleAddressChange} className='element-control'></textarea>
            </pre>
            </div>
            
            <div className='form-control'>
            <p id='email'></p>
            <pre>
            <label id="font-control">   Email id: &nbsp;</label>
            <input type="email" value={this.state.email} name="email" onChange={this.handleEmailChange} className='element-control' />
            </pre>
            </div>

            <div className='form-control'>
              <input type="hidden" value={this.state.id} name="id"/>
            <button type="submit" className="submit-style"  onClick={this.onSubmit}>Submit</button>
             &nbsp;&nbsp;

            <button type="reset" className="cancel-style"  onClick={this.onCancel}>Cancel</button>
            </div>

          </form>
      </div>
    )
  }
}

export default New_Patient;