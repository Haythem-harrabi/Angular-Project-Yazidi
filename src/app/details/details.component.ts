import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  
})
export class DetailsComponent {

  id : number | undefined;
  constructor(private ActivatedRoute : ActivatedRoute ){}

  ngOnInit(){
    this.id = this.ActivatedRoute.snapshot.params['id']
  }
  
}
