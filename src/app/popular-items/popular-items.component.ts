import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-items',
  templateUrl: './popular-items.component.html',
  styleUrls: ['./popular-items.component.scss']
})
export class PopularItemsComponent implements OnInit {
  popularItems = [
    {
      itemName: "Lenova Laptop",
      url:"https://image.shutterstock.com/z/stock-photo-laptop-isolated-on-white-background-with-clipping-path-393956974.jpg",
      description: "old laptop that my grandfather used",
      sellerName:"kidrock23",
      itemPrice:20,
      itemCondition:"poor",
    },
    {
      itemName: "Microswerve tablet for kids",
      url: "https://image.shutterstock.com/image-vector/tablet-flat-icon-ipad-style-450w-393987937.jpg",
      description: "used tablet for kid's learning",
      sellerName:"tupacssun1",
      itemPrice:300,
      itemCondition:"very good",
    },
    {
      itemName: "Hb 2008 a5 quad core Desktop",
      url:"https://image.shutterstock.com/z/stock-photo-desctop-computer-on-wooden-desk-1170846982.jpg",
      description: "used computer still works great",
      sellerName:"joesrightgun2",
      itemPrice:200,
      itemCondition:"okay",
    },
    {
      itemName: "Predatorware silent gaming tablet",
      url:"https://image.shutterstock.com/z/stock-vector-tablet-in-ipad-style-black-color-with-blank-touch-screen-isolated-on-white-background-stock-vector-522160927.jpg",
      description: "new and unopened. Free Expediate shipping",
      sellerName:"masterchief117",
      itemPrice: 800,
      itemCondition:"new",
    },
    {
      itemName: "Imoc a7 quad core 2018",
      url:"https://image.shutterstock.com/z/stock-photo-laptop-with-blank-screen-on-table-340152863.jpg",
      description: "new Imoc with all accessories included. Comes with 2 year Orange care warranty",
      sellerName:"Balmart",
      itemPrice: 2500,
      itemCondition:"new",
    },
    {
      itemName: "Imoc a7 quad core 2018",
      url:"https://image.shutterstock.com/z/stock-photo-laptop-with-blank-screen-on-table-340152863.jpg",
      description: "new Imoc with all accessories included. Comes with 2 year Orange care warranty",
      sellerName:"Balmart",
      itemPrice: 2500,
      itemCondition:"new",
    },
    {
      itemName: "Imoc a7 quad core 2018",
      url:"https://image.shutterstock.com/z/stock-photo-laptop-with-blank-screen-on-table-340152863.jpg",
      description: "new Imoc with all accessories included. Comes with 2 year Orange care warranty",
      sellerName:"Balmart",
      itemPrice: 2500,
      itemCondition:"new",
    },    {
      itemName: "Imoc a7 quad core 2018",
      url:"https://image.shutterstock.com/z/stock-photo-laptop-with-blank-screen-on-table-340152863.jpg",
      description: "new Imoc with all accessories included. Comes with 2 year Orange care warranty",
      sellerName:"Balmart",
      itemPrice: 2500,
      itemCondition:"new",
    },  
  ]
  constructor() { }

  ngOnInit() {
  }

}
