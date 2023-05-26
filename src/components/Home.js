import React , { Component } from 'react'
import "./Home.css";

class Home extends Component {

	constructor(props){

		super(props)

		this.state = {

           
		}
	}


	render() {
      return(
          <div className="container">
            <img src={require('./img.jpg')} alt="logo" className="img-fluid"/>
            <div className="centered">Employee Management System</div>
            <div className="centered-text">Employee management system can add, view and update employee records based on the requirement you can perform the following opertions by selecting the tabs. </div>
         </div>
  );
	}
}

export default Home;