import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Residence } from '../core/models/residence';
import { Product } from '../core/models/product.module';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products=[{id : 1 , title : "koura", price: 2 , quantity : 3 , image : "https://thetoyfactoryshop.co.za/wp-content/uploads/2024/05/987b.jpg"}, {id : 2 , title : "koura okhra", price: 5 , quantity : 5, image : "https://m.media-amazon.com/images/I/81Muw26HfdL.jpg" }]

  constructor(private http : HttpClient ) { }
  
  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:3000/products')
  }

  AddProduct(p:Product):Observable<Product[]>{
    return this.http.post<Product[]>('http://localhost:3000/products',p)
  }
 
  GetProductById(id:number):Observable<Product>{
    return this.http.get<Product>('http://localhost:3000/products/'+ id)
  }

  DeleteProduct(id: number):Observable<Product[]>{
    return this.http.delete<Product[]>('http://localhost:3000/products/'+ id)
  }

  UpdateProduct(id:number, p:Product):Observable<Product[]>{
    return this.http.put<Product[]>('http://localhost:3000/products/'+id,p)
  }
 
}
