import React , { Component } from 'react'

class Header extends Component {

	constructor(props){

		super(props)

		this.state = {

           
		}
	}



	render() {
      return(
          <div>
                <nav className="navbar navbar-dark bg-dark">
 <a href="/home" className="navbar-brand"><b> Employee Management</b></a>
 <a href="/add-employee" className="navbar-brand"><b> Add Employee</b></a>
 <a href="/employee" className="navbar-brand"><b> View Details</b></a>

               </nav> 
          </div>
      	)
	}
}

export default Header;