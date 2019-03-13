import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  itemName:string = "MCI GTF 3010 Computer";
  description:string= "brand new computer for gaming and has never been opened";
  sellerName:string = "NCID";
  itemPrice:number = 1000;
  itemCondition:string = 'new';

  @Input() itemArr:Array<object>;
  constructor() { }

  ngOnInit() {
  }

}
