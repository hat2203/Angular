import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {StudentComponent} from "./student/student.component";
import {ClassroomComponent} from "./classroom/classroom.component";
import {Session1agularComponent} from "./session1agular/session1agular.component";
import {Tablesession1Component} from "./tablesession1/tablesession1.component";
import {WeatherComponent} from "./weather/weather.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {Assignment1Component} from "./assignment1/assignment1.component";
import {Assignment2Component} from "./assignment2/assignment2.component";

const appRoutes: Routes = [
  {
    path: 'lop-hoc', component: ClassroomComponent
  },
  {
    path: 'san-pham', component: Session1agularComponent
  },
  {
    path: 'thoi-tiet', component: WeatherComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ClassroomComponent,
    Session1agularComponent,
    Tablesession1Component,
    WeatherComponent,
    Assignment1Component,
    Assignment2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
