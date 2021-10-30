import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Airplain } from '../airplain';
import { AirplainService } from '../airplain-service.service';
import {Location} from '@angular/common';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class AirplainComponent implements OnInit {

   //@Input()
   //flight:Airplain;
   //@Output()
  // onSave:EventEmitter<Airplain> = new EventEmitter<Airplain>();
  
  
  constructor(public route:ActivatedRoute,private airplainService: AirplainService,private location:Location) { }//,private fb: FormBuilder
  
  //myForm: FormGroup;
  flight:Airplain;
  id:number
  ngOnInit() {
    //this.myForm = this.fb.group({
     //destination: ['', Validators.required],
     //price: ['', Validators.required],
     //date: ['', Validators.required],
    //numOfCards: [ '',Validators.required],
   // });
    this.route.params.subscribe((paramsFromUrl: Params) => {
      //urlמציב במשתנה מאיפה  הגיע דרך ה 
       this.id = paramsFromUrl.id;
      if(this.id==0)
      this.flight=new Airplain();
      else
      this.flight=this.airplainService.airplainList.find(x=>x.id==this.id)
    });
  }
  //onSubmit(form: FormGroup) {
   // console.log('Valid?', form.valid); // true or false
   // console.log('Destination', form.value.name);
   // console.log('Price', form.value.email);
    //console.log('Date', form.value.message);
    //console.log('NumOfCards', form.value.message);
  //}
  cancel(){
    this.location.back();
   }
  save(){
    if(this.id==0)//add flight
    {
 //ישלח לפונקציה בשרת שתוסיף את המוצר למסד הנתונים
    //הפונקציה תחזיר את הרשימה החדשה ותציב ברשימה בסרוויס
    this.airplainService.airplainList.push(this.flight)
    //את השורה הבאה יש לכתוב בתוך הסבסקריב של הפונקציה
    //בעת הצלחה - בתוך הDATA
    this.location.back();
    }
   else{//edit flight
 //ישלח לפונקציה בשרת שתעדכן את המוצר הנוכחי במסד הנתונים
    //הפונקציה תחזיר את הרשימה החדשה ותציב ברשימה בסרוויס
    this.airplainService.airplainList[this.airplainService.airplainList.indexOf(this.airplainService.airplainList.find(x=>x.id==this.flight.id))]=this.flight

    //את השורה הבאה יש לכתוב בתוך הסבסקריב של הפונקציה
    //בעת הצלחה - בתוך הDATA
    this.location.back();
   }
   
    
  }
}