import React , { Component } from 'react'
import Employeeservices from '../services/Employeeservices';

class Createemployee extends Component {

	 constructor(props) {
        super(props)

        this.state = {
            name: '',
            lastname: '',
            emailid: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    }

    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employees = {name: this.state.name, lastname: this.state.lastname, emailid: this.state.emailid};
        console.log('employees => ' + JSON.stringify(employees));

         Employeeservices.createEmployee(employees).then(res =>{
                this.props.history.push(`/employee`);
            });
         e.target.dispatchEvent(new Event('submit'));
    }
    
    changeFirstNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastname: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({emailid: event.target.value});
    }

    cancel(){
        this.props.history.push(`/employee`);
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className = "text-center"> Add Employee Details</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="name" className="form-control" 
                                                value={this.state.name} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastname" className="form-control" 
                                                value={this.state.lastname} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="emailid" className="form-control" 
                                                value={this.state.emailid} onChange={this.changeEmailHandler}/>
                                        </div>
                                           <br/><br/>
                                        <button type="submit" className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default Createemployee;