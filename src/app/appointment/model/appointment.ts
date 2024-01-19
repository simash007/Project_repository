import { Time } from "@angular/common";

export class Appointment{
    appointDate:String;
    testName:String;
    testTime:String;
    
    constructor( appointDate:String,testName:String,testTime:String){
        this.appointDate=appointDate;
        this.testName=testName;
        this.testTime=testTime;
    }
}