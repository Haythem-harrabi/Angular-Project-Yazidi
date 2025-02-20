import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  title : string = "";
  price : any;
  quantity: any ;
   constructor(private ps: ProductService) { }

  save(){
    this.ps.products.push({id : 10 , title :  this.title, price: this.price , quantity : this.quantity, image : "https://m.media-amazon.com/images/I/81Muw26HfdL.jpg" })
    console.log(this.ps.products)
  }
}
