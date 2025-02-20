import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  
})
export class DetailsComponent {

  id : number | undefined;
  product : any;
  constructor(private ActivatedRoute : ActivatedRoute, private ps : ProductService ){}

  ngOnInit(){
    this.id = this.ActivatedRoute.snapshot.params['id'];
    this.product = this.ps.products.find((p:any)=>p.id==this.id);
  }
  
}
