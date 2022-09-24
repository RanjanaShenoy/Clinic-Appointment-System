import React from 'react';

import './PatientsList.css';

import Component from 'react';

class ViewAppointment extends React.Component {

    constructor(props) {
		super(props);

		this.state = {
			items : [],
			DataisLoaded: false,
			id: ''
			
		};	
	}

	componentDidMount() {
		fetch(
     "http://localhost:8080/api/v1/allappointments")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
	}


  render() {

    const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Please wait some time.... </h1> </div> ;
    return (
        <div>
    
        <div className='appoint-table-style'>
            <table id="item-padding">	
                <thead>
            <tr>
               <th colSpan={2}>Appointment Id</th>
                <th colSpan={2}>Patient serial_no</th>
                <th colSpan={2}>Patient Name</th>
                <th colSpan={2}>Appointment date-time</th>
                <th colSpan={2}>Doctor Name</th>
            </tr>
            </thead>
            <tbody>
            {items.map((item) => (
         <tr key={item.ap_id}>

             <td colSpan={2}>{ item.ap_id}</td>

            <td colSpan={2}>{ item.p_sno}</td>

           <td colSpan={2}>{ item.p_name }</td>

           <td colSpan={2}>{ item.p_datetime }</td>

           <td colSpan={2}>{ item.doctor_name }</td>

        </tr>
        ))}
            
            </tbody>
          </table>
          </div>
          </div>	
    )
  }
}

export default ViewAppointment


