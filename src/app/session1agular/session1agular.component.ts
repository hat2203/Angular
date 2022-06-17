import {Component} from "@angular/core";
import {IProduct} from "../interfaces/product.interface";

@Component({
  selector: "app-session1agular",
  templateUrl: "./session1agular.component.html"
})
export class Session1agularComponent{
    data: IProduct [] = [
      {newID: 1 , newTen: 'SP1' , newMa: 'T2001' , newSoluong:12},
      {newID: 2 , newTen: 'SP2' , newMa: 'T2002' , newSoluong:20},
      {newID: 3 , newTen: 'SP3' , newMa: 'T2003' , newSoluong:16},
      {newID: 4 , newTen: 'SP4' , newMa: 'T2004' , newSoluong:15},
    ];
}
