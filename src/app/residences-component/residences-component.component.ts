import { Component } from '@angular/core';
import { Residence } from '../core/models/residence';
import { ResidencesService } from '../services/residences.service';

@Component({
  selector: 'app-residences-component',
  templateUrl: './residences-component.component.html',
  styleUrls: ['./residences-component.component.css']
})
export class ResidencesComponentComponent {

  listResidences:Residence[]=[
   ];
 
   Favorites:Residence[]=[];
   Filtered:Residence[]=[{id:1,"name": "El fel","address":"Borj Cedria", "image":"../../assets/images/R1.jpeg", status: "Disponible"},
    {id:2,"name": "El yasmine", "address":"Ezzahra","image":"../../assets/images/R2.jpg", status: "Disponible" },
    {id:3,"name": "El Arij", "address":"Rades","image":"../../assets/images/R3.jpg", status: "Vendu"},
    {id:4,"name": "El Anber","address":"inconnu", "image":"../../assets/images/R4.jpg", status: "En Construction"}];
   searchInput : string | undefined ;



   constructor(private rs : ResidencesService){

   }
   ngOnInit(){
    this.rs.getResidences().subscribe((data)=>this.listResidences=data)
   }
  

   ShowAddress( p : any){
    if (p.address=="inconnu"){
      alert("Adresse inconnue !!")
    }
    else{
      alert(p.address)
    }
   }

   AddFavorite(i : any){
    this.Favorites.push(this.listResidences[i])
    document.getElementById("Likebtn")?.setAttribute("disabled", "true");
    
   }
   search(){
      this.Filtered = this.listResidences.filter(residence => 
        residence.address.toLowerCase().includes(this.searchInput?.toLowerCase() || '')
      );
      
    }
}
