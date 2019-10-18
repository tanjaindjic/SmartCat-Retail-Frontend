import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'src/app/core/model/employee';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css', '../../territories/territory/territory.component.css']
})
export class EmployeeComponent implements OnInit {

  @Input() employee: Employee

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

  editEmployee(e: Employee) {
    this.router.navigate([`/employee/id/${e.id}`])
    return false;
  }

}
