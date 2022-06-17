import {HttpClient, HttpParams} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {IWeather} from "../interfaces/weather.interfaces";
import {myJson} from "../interfaces/json.interface";


@Injectable({
  providedIn: 'root'
})

export class JsonServices{

  constructor(private httpClient: HttpClient) {
  }

  dataJson(){
    return this.httpClient.get<myJson>("http://localhost:4200/assets/data.json")
  }
}
