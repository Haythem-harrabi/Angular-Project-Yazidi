import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  products=[{id : 1 , title : "koura", price: 2 , quantity : 3 , image : "https://thetoyfactoryshop.co.za/wp-content/uploads/2024/05/987b.jpg"}, {id : 2 , title : "koura okhra", price: 5 , quantity : 5, image : "https://m.media-amazon.com/images/I/81Muw26HfdL.jpg" }]
  color : string = "";
  show(){
     alert("hello")
  } 
  Buy( i : any){
    this.products[i].quantity-=1

  }
}
