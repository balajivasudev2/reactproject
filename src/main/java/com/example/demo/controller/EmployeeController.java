package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.Resourcenotfound;
import com.example.demo.model.Employee;
import com.example.demo.repository.Employeerepo;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class EmployeeController {
	
@Autowired	
private Employeerepo repo;

@GetMapping("/employees")
public List<Employee> getdetails()
{
	return repo.findAll();
}

@PostMapping("/employees")
public Employee createEmployee(@RequestBody Employee employee)
{
	return repo.save(employee);
}

@GetMapping("/employees/{id}")
public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {
	Employee employee = repo.findById(id)
			.orElseThrow(() -> new Resourcenotfound("Employee not exist with id :" + id));
	return ResponseEntity.ok(employee);
}

@PutMapping("/employees/{id}")
public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employeeDetails){
	Employee employee = repo.findById(id)
			.orElseThrow(() -> new Resourcenotfound("Employee not exist with id :" + id));
	
	employee.setName(employeeDetails.getName());
	employee.setLastname(employeeDetails.getLastname());
	employee.setEmailid(employeeDetails.getEmailid());
	
	Employee updatedEmployee = repo.save(employee);
	return ResponseEntity.ok(updatedEmployee);
}

}
