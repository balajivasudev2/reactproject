import React , { Component } from 'react'
import Employeeservices from '../services/Employeeservices';
import "./Viewemployee.css";

class Viewemployee extends Component {

	constructor(props){

		super(props)

		this.state = {
          id: this.props.match.params.id,
            employee: {}
           
		}
	}

componentDidMount(){
        Employeeservices.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }

	render() {
      return(
          <div>
          <br></br>
                   <div className = "container">
                        <div className = "row">
                         <h3 className = "text-center heading"> View Employee Details</h3>
                            <div className = "card col-md-6 offset-md-3">
                                <div className = "card-body text">
                                   <div className = "row">
                                       <label> Employee First Name: { this.state.employee.name }</label>
                                   </div>
                                <div className = "row">
                                     <label> Employee Last Name: { this.state.employee.lastname }</label>
                                 </div>
                                <div className = "row">
                                  <label>Employee Email ID: { this.state.employee.emailid }</label>
                                </div>
                            </div>
                         </div>
                     </div>
                  </div>
                </div>
      	)
	}
}

export default Viewemployee;