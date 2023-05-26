import axios from 'axios';

const url="http://localhost:9091/api/v1/employees";

class Employeeservices
{

	getEmployees()
	{
		return axios.get(url);
	}

	createEmployee(employees){
        return axios.post(url, employees);
    }

     getEmployeeById(employeeId){
        return axios.get(url + '/' + employeeId);
    }

    updateEmployee(employee, employeeId){
        return axios.put(url + '/' + employeeId, employee);
    }
}

export default new Employeeservices()