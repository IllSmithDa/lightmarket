import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItempageService {
  itemName:string;
  url:string;
  description:string;
  sellerName:string;
  itemPrice:number;
  itemCondition:string;
  key:string;
  constructor() { }
}
