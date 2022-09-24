import React, { useEffect ,useState, useCallback} from 'react';
import './PatientRegForm.css';

function PatientRegForm() {
    const [name,setName]=useState()
    const [phone,setPhone]=useState()
    const [gen,setGen]=useState()
    const [address,setAddress]=useState()
    const [email,setEmail]=useState()
  // const [patient,setPatient]=useState([])

    const handleFormClick=(e)=>{
    e.preventDefaultHandler()
   // console.log("Form called")
    const patient={name,phone,gen,address,email};
    console.log(patient);
    
    window.alert(patient);
    fetch("http://localhost:8080/api/v1/add",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(patient)
    }).then(()=>{
      // console.log("New Patient Added!");
       window.alert("New Patient Added!");
    });

    }
    /* render() { */
        return (
            <div className="form-style">
                
                <p>New Patient? Register Here!</p>
                <form className="">
                <table className="table-style">
                    <tbody className="table-border-style">
                <tr className="table-border-style">
                    <td>
                    <label>
                    Name:   
                    </label>
                   </td> 
                    <td>
                    <input type="text" name="name" value={name} /><br/><br/>
                    </td>
                </tr>

                <tr className="table-border-style">
                    <td>
                    <label>
                    Phone:  
                    </label>
                   </td> 
                    <td>
                    <input type="text" name="phone" value={phone}/><br/><br/>
                    </td>
                </tr>

                <tr className="table-border-style">
                    <td>
                    <label>
                    Gender:  
                    </label>
                   </td> 
                    <td>
                    <select>
                        <option value="male" name="gen" >Male</option>
                        <option value="female" name="gen" >Female</option>
                    </select>
                    <br/><br/>
                    </td>
                </tr>

                <tr className="table-border-style">
                    <td>
                    <label>
                    Address: 
                    </label>
                   </td> 
                    <td>
                    <input type="text" name="address" value={address}/><br/><br/>
                    </td>
                </tr>

                <tr className="table-border-style">
                    <td>
                    <label>
                    Email:
                    </label>
                   </td> 
                    <td>
                    <input type="email" name="email" value={email}/><br/><br/>
                    </td>
                </tr>
                </tbody>
                </table>
                <br/>
                <br/>
         { /*<input type="submit" value="Submit" className="button-style" />  */}
          <button type="submit" className="button-style">Submit</button>
            </form>
            </div>
        );
    }

export default PatientRegForm;