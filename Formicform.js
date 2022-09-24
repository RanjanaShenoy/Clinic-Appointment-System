import React, { useEffect ,useState, useCallback} from 'react';
import {Formik ,Form} from 'formik';
import { Button, Card,Input,
     Row, Col, Label, Modal, ModalHeader, Container, } from "reactstrap";
import './FormStyle.css';


class FormicForm extends React.Component{ 
    constructor(props) {
         super(props)
         this.user = sessionStorage.getItem('authenticatedUser')
      this.state= {
                 }
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);


    }
     handleChange(event) {
                 const target = event.target;
                 const name = target.name;
                 let value  = event.target.value.trim();
          if(event.currentTarget.value.charAt(0).includes(" ")){
            event.currentTarget.value = event.currentTarget.value.replace(/\s/g, "");
          }
                 this.setState({ [name]: value });
    }
    onSubmit(values){
        const patient={
            "name" : values.name,
            "phone" : values.phone,
            "gen" : values.gen, 
            "address" : values.address,
            "email" : values.email};
        console.log(patient);
        if(values.name==undefined||values.phone==undefined||values.gen==undefined||values.address==undefined||values.email==undefined)
        {
            window.alert("Data cannot be empty!!");
        }

        else{
        fetch("http://localhost:8080/api/v1/add",{
            method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(patient)
        }).then(()=>{
           window.alert("New Patient Added!");

    })
    }
}

onCancel(event){

}

    render() {
        
        let {name,phone,gen, address, email} = this.state
        return(
        
        <div className="container-fluid">
            <Row>
              <Col xl={8} md={7} lg={5}>
            <Formik
                    onSubmit={this.onSubmit}
                    initialValues={{name,phone, address, gen, email}}
                    validateOnChange={false}
                    validateOnBlur={false}
                    enableReinitialize={true}
                    onChange={this.handleChange}>
                    {
                    (props) => (
            <Form className="form-style">
            <Row>
            <Col md={12}>
                <Label>Name: &nbsp;</Label>
            <Input name="name" id="name" type="text" onChange={this.handleChange} className="form-control" />
            </Col>
            <br/>
            
            <Col md={12}>
            <Label>Phone: &nbsp;</Label>
            <Input type="text" name="phone" onChange={this.handleChange} className="form-control" />
            </Col>

            <br/>

            <Col>
            <Label>Gender: &nbsp;</Label>
            <select onChange={this.handleChange} name="gen" className="form-control">
                        <option value="select">select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
            </select>
            </Col>
             
            <br/>

            <Col md={12}>
            <Label>Address: &nbsp;</Label>
            <Input type="text" name="address" onChange={this.handleChange}  className="form-control" />
            </Col>

           <br/>

            <Col md={12}>
            <Label>Email id: &nbsp;</Label>
            <Input type="email" name="email" onChange={this.handleChange}  className="form-control" />
            </Col>

            <br/>

            <Col md={6-6}>
            <button type="submit" className="submit-style"  onClick={this.onSubmit}>Submit</button>
             &nbsp;&nbsp;

            <button type="cancel" className="cancel-style"  onClick={this.onCancel}>Cancel</button>
            </Col>

            </Row>
            
            </Form>
            )
            }
    </Formik>
    </Col>
</Row>
    </div>
        )
    }
    }


export default FormicForm;