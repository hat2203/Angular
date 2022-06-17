import {Component, Input} from "@angular/core";
import {IProduct} from "../interfaces/product.interface";

@Component({
  selector: "app-tablesession1",
  templateUrl: "./tablesession1.component.html"
})
export class Tablesession1Component{
    // @Input("newID") newID !: number;
    // @Input("newTen") newTen !: string;
    // @Input("newMa") newMa !: string;
    // @Input("newSoluong") newSoluong !: number;
  @Input()
  product!: IProduct;

}
