import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../core/models/product.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  id !: number;
  title : string = "";
  price : any;
  quantity: any ;
  ProductForm : FormGroup
  product!:Product;

   constructor(private ps: ProductService, private act : ActivatedRoute, private route : Router) {
    this.ProductForm=new FormGroup({ 
    id : new FormControl({value: this.generateId(), disabled: true },Validators.required),
    title : new FormControl('',[Validators.required,Validators.minLength(4)]),
    price : new FormControl('',[Validators.required,Validators.min(0) ]),
    quantity : new FormControl('',[Validators.required,Validators.min(0)] ),
  });
    }

    ngOnInit(){
      this.id= this.act.snapshot.params["id"] ;
    
    this.ps.GetProductById(this.id).subscribe(
      (data)=> {this.product = data
      this.ProductForm.patchValue(this.product)
    });}

  save(){

    if (this.id){
      this.ps.UpdateProduct(this.id,this.ProductForm.value).subscribe(
       () => this.route.navigateByUrl('/home')
      )
    }
    else{
      this.ps.AddProduct(this.ProductForm.value).subscribe(
        () => this.route.navigateByUrl('/home')
      )
    }
    
  }

  generateId(): number {
    return Math.floor(Math.random() * 10000) + 1; // Génération d'un ID aléatoire
  }
}
