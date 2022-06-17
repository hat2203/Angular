import {Component} from "@angular/core";

@Component({
  selector: "app-classroom",
  templateUrl:"./classroom.component.html"
})
export class ClassroomComponent{ // ten lop (StudentComponent
    className:string = 'T2203E';
    studentNames:string[] = ["Nguyen Van Tu","Do Hung Dung","Nguyen Trung Loi"];
    studentAges:number[] = [16,20,21];
    studentPhones:string[] = [ "065621973" , "0698746123", "0776469235"];

    changeName(){
      this.className = 'T2204M';
    }
}
