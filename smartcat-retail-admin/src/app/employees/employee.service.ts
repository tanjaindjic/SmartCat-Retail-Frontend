import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../core/model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public API_ENDPOINT = "http://localhost:8096/employee"

  constructor(private http: HttpClient) { }

  getEmployee(id: number) {
    return this.http.get<Employee>(this.API_ENDPOINT  + "/" + id);
  }

  create(employee: Employee, id: number) {
     return this.http.post(this.API_ENDPOINT, {employee: employee, shopId: id});
  }

  update(employee: Employee, id: number) {
    return this.http.put<Employee>(this.API_ENDPOINT + "/" + employee.id, {employee: employee, shopId: id});
  }

  remove(id: number) {
    return this.http.delete(this.API_ENDPOINT + "/" + id);
  }
}
