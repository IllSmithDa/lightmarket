import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  shopCategory:string = 'All Categories';
  searchTerm:string;
  constructor() { }

  ngOnInit() {
  }
  setCategory = (category: string) => {
    this.shopCategory = category;
  }
  goHome = () => {
    window.location.href = "/";
  }
  
  onEnter(value: string) { 
    this.searchTerm = value; 
    console.log(this.searchTerm)
  }
  searchPage = () => {
    console.log(this.searchTerm);
    window.location.href = `/result/${this.searchTerm}`
  }
}
