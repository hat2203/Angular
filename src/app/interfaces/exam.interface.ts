import {List} from "./list.intreface";

export interface Child {
  title: string;
  des: string;
  name: string;
}

export interface Category {
  name: string;
  childs: Child[];
}

export interface Data {
  list: List[];
  categories: Category[];
}

export interface Information{
  data: Data;
}
