import { Component } from '@angular/core';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public employees: Employee[];

  constructor(private http: HttpClient){

  }
}
