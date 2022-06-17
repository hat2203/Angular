import {Child} from "./assignment2.child.interface";

export interface Category {
  name: string;
  childs: Child[];
}

export interface Data {
  categories: Category[];
}

export interface MyAssignment2 {
  data: Data;
}
