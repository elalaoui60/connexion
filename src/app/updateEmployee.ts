import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id:number;
  employee:Employee;

  constructor(private route:ActivatedRoute,private router:Router,
    private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employee=new Employee();
    this.id=this.route.snapshot.params['id'];
    
    
    this.employeeService.getEmployee(this.id).subscribe(data=>
      {
        console.log(data);
      });
  }
  updateEmployee()
  {
    this.employeeService.updateEmployee(this.id,this.employee)
    .subscribe(data=>
      {
        console.log(data);
      },
      error=>
      {
        console.log("vous avez une erreur 2"+error);
      });
      
      this.gotoList();
  }
  modifier()
  {
    this.updateEmployee();
  }
  gotoList()
  {
    this.router.navigate(['employees']);
  }

}
