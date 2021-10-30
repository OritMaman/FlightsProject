import { Component, OnInit } from '@angular/core';
import { Airplain } from '../airplain';
import { AirplainService } from '../airplain-service.service';
//import {Location} from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isShow:boolean=true;
  airplainToEdit:Airplain;
  topics = ['flight id','src','destination','price','date','number Of Cards','actions'];
  
  airplains: Airplain[] = [];
  error = '';

  constructor(private airplainService: AirplainService) { }//,private location:Location
 

  
  edit(flight:Airplain){
   this.airplainToEdit = flight;
   this.isShow=false;
  }
  
  
  onMySave(airplainEdit:Airplain){
   this.isShow = true;
   var index = this. airplainService.airplainList.findIndex(x => x.id==airplainEdit.id)
   this. airplainService[index] = airplainEdit;
  }
 
  word:string
  search()
  {
    
    this.airplainService.airplainList=this.airplainService.airplainList1.filter(x=>x.destination==this.word)
  }
  //cancel(){
 //   this.location.back();
  // }
  ngOnInit(){
    this.airplainService.airplainList1=this.airplainService.airplainList;
   //פונקציה לשליפת כל הטיסות והצבה ברשימה בסרוויס
   //this.airplainService.getAirplainList().subscribe(
     // d=>{this.airplainService.airplainList=d,this.airplainService.airplainList1=this.airplainService.airplainList;},
     // err=>{console.log(err);}
   //);
   this.getAirplains();
   
  }
  
  getAirplains(): void {
    this.airplainService.getAll().subscribe(
      (data: Airplain[]) => {
        this.airplains = data;
        
      },
      (err) => {
        console.log(err);
        this.error = err;
      }
    );
  }
  delete(id:number){
    var index =this.airplainService.airplainList.findIndex(x=>x.id==id);
    if(index>-1)
    this.airplainService.airplainList.splice (index,1)
    };
  
}


