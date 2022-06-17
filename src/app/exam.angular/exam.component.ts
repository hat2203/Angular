import {Component} from "@angular/core";
import {List} from "../interfaces/list.intreface";
import {Category} from "../interfaces/exam.interface";
import {WeatherServices} from "../services/weather.services";
import {ExamServices} from "../services/exam.services";

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html'
})
export class ExamComponent{
  list: List[] =[];
  categories: Category[] = [];

  constructor(private examServices: ExamServices) {
  }
  ngOnInit(){
    this.examServices.Exam().subscribe(value=>{
      this.categories = value.data.categories;
      this.list = value.data.list;
    })
  }

}
