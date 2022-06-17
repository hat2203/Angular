import {Component, Input} from "@angular/core";

@Component({
  selector: "app-student",
  templateUrl:"./student.component.html"
})
export class StudentComponent{ // ten lop (StudentComponent
  @Input("studentName") studentName !:string ;
  @Input("studentAge")studentAge !:number;
  @Input("studentPhone")studentPhone !:string;


}
// changeName(){
//   this.studentName = 'Nguyen Van Nam';
// }
