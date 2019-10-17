import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'src/app/core/model/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @Input() employee: Employee

  constructor() { }

  ngOnInit() {
  }

}
