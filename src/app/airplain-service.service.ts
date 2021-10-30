import { Injectable } from '@angular/core';
import { Airplain } from './airplain';
import { HttpClient} from '@angular/common/http';
//import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})


export class AirplainService {

 constructor(private http:HttpClient ) { 
  //  this.getAirplainList().subscribe(data => this.airplainList = data)
    
  }

  airplainList1:Airplain[]=[];
  airplainList:Airplain[]= [
   new Airplain(1,'London',3000,'10-10-2019',4),
   new Airplain(2,'Maroko',2400,'18-09-2020',1),
   new Airplain(3,'China',3500,'02-03-2018',2),
   new Airplain(4,'Amerika',5100,'25-10-2018',10),
   new Airplain(5,'Maroko',5100,'25-10-2018',12),
   new Airplain(6,'London',5100,'25-10-2018',4),
   new Airplain(7,'Paris',5100,'25-10-2018',3),
   new Airplain(8,'Amerika',5100,'25-10-2018',1),
   new Airplain(9,'Paris',5100,'25-10-2018',2),
   new Airplain(10,'Paris',2500,'25-10-2018',9)];

baseUrl = 'http://localhost/Flights_Servers';            
getAll() {
  return this.http.get(`${this.baseUrl}/list`).pipe(
    map((res: any) => {
      return res['data'];
    })
  );
}            
deleteFlight() {
  return this.http.delete(`${this.baseUrl}/delete`).pipe(
    map((res: any) => {
      return res['data'];
    })
  );
}
editFlight() {
  return this.http.get(`${this.baseUrl}/edit`).pipe(
    map((res: any) => {
      return res['data'];
    })
  );
}
addFlight() {
  return this.http.get(`${this.baseUrl}/edit`).pipe(
    map((res: any) => {
      return res['data'];
    })
  );
}
selectFlight() {
  return this.http.get(`${this.baseUrl}/select`).pipe(
    map((res: any) => {
      return res['data'];
    })
  );
}
}
