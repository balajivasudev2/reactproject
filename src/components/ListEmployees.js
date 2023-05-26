import React , { Component } from 'react';
import Employeeservices from '../services/Employeeservices';


class ListEmployees extends Component {
	constructor(props){

		super(props) 

		this.state = {

           employees: []
		}

    this.editEmployee=this.editEmployee.bind(this);
	}

   editEmployee(id){
        this.props.history.push(`/update-employee/${id}`);
        //history.push(`/update-employee/${id}`);
    }

   Viewemployee(id){
        //console.log(id);
        this.props.history.push(`/view-employee/${id}`);
        //history.push(`/view-employee/${id}`);
    }

componentDidMount()
{
  
  Employeeservices.getEmployees().then((res) =>{
     this.setState({employees: res.data});
     console.log(res.data);
    });

}

	render() {
      return(
        
          <div>
                 <h2 className="text-center">Employee List</h2>
                    <div className = "row">
                       <form>
                       <table className="table table-striped table-bordered">
                         <thead>
                           <tr>
                             <th> Employee first Name</th>
                             <th> Employee Last Name</th>
                             <th> Actions </th>
                           </tr>
                        </thead>
                    <tbody>
                       {
                              this.state.employees.map(
                                 employee =>
                                 <tr key = {employee.id}>
                                 <td> {employee.name}</td>
                                  <td> {employee.lastname}</td>
                                  <td>
                                
                                   <button type='submit' onClick={this.editEmployee(employee.id)} className="btn btn-info">Update </button>
                                  </td>
                                   <td>
                                   <button style={{marginLeft: "10px"}} onClick={ () => this.Viewemployee(employee.id)} className="btn btn-info">View </button>
                                             </td>
                                  </tr>
                                )
                       }
                    </tbody>
                    
                    </table>
                       </form>
                  </div>
                  
          </div>
          
      	)
	}
}

export default ListEmployees;