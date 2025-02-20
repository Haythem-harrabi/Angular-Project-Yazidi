import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  color : string = "";
  products : any=[];
   constructor(private ps: ProductService) {
    
  }
  ngOnInit(){
    this.products = this.ps.products
  }
  show(){
     alert("hello")
  } 
  Buy( i : any){
    this.products[i].quantity-=1

  }
}
