import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Airplain } from './airplain';
import { AirplainService } from './airplain-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Aviya&OritProject';
  // isShow:boolean=true;
  // airplainToEdit:Airplain;
  // topics = ['numberFlight','src','destination','price','date','numOfCards','actions'];

  
 
  

     constructor(private router: Router) { }
 

  //   delete(id:number){
  //     var index =this.airplainService.airplainList.findIndex(x=>x.id==id);
  //     if(index>-1)
  //     this.airplainService.airplainList.splice (index,1)
  //   };
  
  //   edit(flight:Airplain){
  // this.airplainToEdit = flight;
  // this.isShow=false;
  // }
  
  // onMySave(airplainEdit:Airplain){
  // this.isShow = true;
  // var index = this. airplainService.airplainList.findIndex(x => x.id==airplainEdit.id)
  // this. airplainService[index] = airplainEdit;
  // }
  ngOnInit(){
    this.router.navigate(['/home'])
  }
}
