import {HttpClient, HttpParams} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {MyAssignment2} from "../interfaces/assignment2.interface";
import {Information} from "../interfaces/exam.interface";



@Injectable({
  providedIn:'root'
})
export class ExamServices{

  constructor(private httpClient: HttpClient) {
  }

  Exam() {
    return this.httpClient.get<Information>("http://localhost:4200/assets/exam.json");
  }

}
