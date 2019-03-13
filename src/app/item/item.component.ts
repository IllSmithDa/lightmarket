import { Component, OnInit, Input } from '@angular/core';
import { ItempageService } from '../itempage.service';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() itemArr:Array<object>;
  constructor(public itemService:ItempageService) { }

  ngOnInit() {
  }

  goItemPage = (itemKey) => {
    window.location.href = `/item/${itemKey}`;
  }
}
