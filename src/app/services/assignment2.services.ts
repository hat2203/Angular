import {HttpClient, HttpParams} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {MyAssignment2} from "../interfaces/assignment2.interface";



@Injectable({
  providedIn:'root'
})
export class Assignment2Services{

  constructor(private httpClient: HttpClient) {
  }

  Assignment2List() {
    return this.httpClient.get<MyAssignment2>("http://localhost:4200/assets/assignment2.json");
  }

}
