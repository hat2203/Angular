import {Component} from "@angular/core";
import {IWeather} from "../interfaces/weather.interfaces";
import {HttpClient, HttpParams} from "@angular/common/http";
import {WeatherServices} from "../services/weather.services";

@Component({
  selector: "app-weather",
  templateUrl:"./weather.component.html"
})

export class WeatherComponent{
     //@ts-ignore
    data :IWeather = null;

    cityCode: string = 'hanoi'
    constructor(private service: WeatherServices) {
    }

    ngOnInit (){
        this.getData('');
    }

    getData(city: string){
    this.service.currenWeather(this.cityCode)
        .subscribe( value=>{
          this.data = value;
        })
    }

    hanoi(){
      this.cityCode = 'hanoi'
      this.getData('');
    }
  london(){
      this.cityCode = 'london'
    this.getData('');
  }
  saigon(){
      this.cityCode = 'saigon'
    this.getData('');
  }
}
