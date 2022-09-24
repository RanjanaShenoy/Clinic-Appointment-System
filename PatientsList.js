
import React from 'react';

import patientService from '../service/patientService';
import './PatientsList.css';
import EditDetails from './EditDetails';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from 'react-router-dom';

import New_Patient from './New_Patient';

class PatientsList extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			items : [],
			DataisLoaded: false,
			id: ''
			
		};
		
		this.deleteButtonHandler=this.deleteButtonHandler.bind(this);
	}

	
	componentDidMount() {
		fetch(
     "http://localhost:8080/api/v1/patients")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
	}
	
	
	deleteButtonHandler = (id) =>{
		
		patientService.deletePatient(id).then( res => {
            this.setState({items: this.state.items.filter(items => items.id !== id)});
        });

	}



	render() {

		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Please wait some time.... </h1> </div> ;


		return (
			<div>
    
			<div className='table-style'>
				<table>	
					<thead>
				<tr>
				   <th colSpan={2}>Serial No</th>
					<th colSpan={2}>Name</th>
					<th colSpan={2}>Phone No</th>
					<th colSpan={2}>Email</th>
					<th colSpan={2}>Address</th>
					<th colSpan={2}>Gender</th>
					<th>Options</th>
				</tr>
				</thead>
				<tbody>
				{items.map((item) => (
             <tr key={item.serial_no}>
	            <td colSpan={2}>{ item.serial_no }</td>
	
	           <td colSpan={2}>{ item.name }</td>

	           <td colSpan={2}>{ item.phone }</td>

	           <td colSpan={2}>{ item.email }</td>
	
	          <td colSpan={2}>{ item.address }</td>
	
	           <td colSpan={2}>{ item.gen }</td>
			   
			   
			  <nav>

<Link to={`/update-patients/${item.serial_no}`}>
<button type="button" className='button-style-1' id='edit-button'>Edit</button>
</Link> 
</nav>

<button type="button" className='button-style-1' id='delete-button' onClick={() => this.deleteButtonHandler(item.serial_no)}>Delete</button>
      
	
			</tr>
			
			
			))}
				
				</tbody>
              </table>
			  <Router>
			  <Switch>
			 <Route exact path='/update-patients/:id'><EditDetails/></Route>
			 
			</Switch>
			</Router>
			  </div>
			
			

			  </div>	
	);

	
}

}

export default PatientsList;