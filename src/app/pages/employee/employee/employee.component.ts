import { Component } from '@angular/core';
import { EmployeeService } from '../../../core/service/employee/employee.service';
import EmployeeDashboardService from '../../../core/service/employee/employee-dashboard.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  public employeeDashboardService: EmployeeDashboardService;

  // Inject the EmployeeDashboardService through the constructor
  constructor(employeeDashboardService: EmployeeDashboardService) {
    this.employeeDashboardService = employeeDashboardService;
  }

  ngOnInit() {
    console.log("abc")
    localStorage.setItem("token", "hihihi")
    this.employeeDashboardService.getAllEmployee()

    setTimeout(() => {
      this.employeeDashboardService.getAllEmployee()
    }, 2000)
  }
}
