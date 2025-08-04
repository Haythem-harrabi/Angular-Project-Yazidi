import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

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
      this.ps.getProducts().subscribe((data)=>this.products
      = data)
     }
  show(){
     alert("hello")
  } 
  Buy( i : any){
    this.products[i].quantity-=1

  }

  DeleteProduct(id : number){
this.ps.DeleteProduct(id).subscribe(
  ()=> this.ngOnInit()
)
  }
}
