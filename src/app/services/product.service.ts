import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products=[{id : 1 , title : "koura", price: 2 , quantity : 3 , image : "https://thetoyfactoryshop.co.za/wp-content/uploads/2024/05/987b.jpg"}, {id : 2 , title : "koura okhra", price: 5 , quantity : 5, image : "https://m.media-amazon.com/images/I/81Muw26HfdL.jpg" }]

  constructor() { }
}
