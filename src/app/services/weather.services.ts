import {HttpClient, HttpParams} from "@angular/common/http";
import {IWeather} from "../interfaces/weather.interfaces";
import {Injectable} from "@angular/core";
import {WeatherForcast} from "../interfaces/weathers.interfaces";
import {ICategory,IDataJSON} from "../interfaces/category.interface";

@Injectable({
  providedIn: 'root'
})

export class WeatherServices {
  static BASE_URL: string = 'https://api.openweathermap.org/data/2.5/';
  static APPID: string = '09a71427c59d38d6a34f89b47d75975c';

  constructor(private httpClient: HttpClient) {
  }

  currenWeather(cityCode: string) {
    var parameters = new HttpParams();
    parameters = parameters.append('q', cityCode);
    parameters = parameters.append('appid', WeatherServices.APPID);
    parameters = parameters.append('units', 'metric');
    return this.httpClient.get<IWeather>(WeatherServices.BASE_URL + "weather",
      {
        params: parameters
      })
  }
  mailList(){
    return this.httpClient.get<IDataJSON>('http://localhost:4200/assets/data.json');
  }
  assignment2 (){
    return this.httpClient.get
  }
}


//   foreCast(cityCode : string){
//       var parameters = new HttpParams();
//       parameters = parameters.append('q',cityCode);
//       parameters = parameters.append('appid', WeatherServices.APPID);
//       parameters = parameters.append('units','metric');
//       return this.httpClient.get<WeatherForcast>(WeatherServices.BASE_URL+"forecast",
//     {
//       params: parameters
//     })
//     }
// }


