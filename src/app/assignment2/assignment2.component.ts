import {Component} from "@angular/core";
// import {Child, IHeader} from "../interfaces/header.interface";
// import {HeaderService} from "../services/header.service";
// import {IMail} from "../interfaces/mail.interface";
import {Assignment2Services} from "../services/assignment2.services";
import {MyAssignment2} from "../interfaces/assignment2.interface";

@Component({
  selector:"app-assignment2",
  templateUrl:"./assignment2.component.html",
  // styleUrls:["./assignment2.component.css"],
})
export class Assignment2Component{
  //@ts-ignore
  data: MyAssignment2 = null;


  constructor(private service: Assignment2Services) {

  }
  ngOnInit(){
    this.getData();
  }

  getData(){
    this.service.Assignment2List()
      .subscribe( value=>{
        this.data = value;
      })
  }
  // changeHeader(name:string){
  //   this.service.headerList().subscribe(value => {
  //     for(var i=0;i<value.data.categories.length;i++){
  //       if(value.data.categories[i].name==){
  //
  //       }
  //
  //     }
  //
  //   })
  // }
}
