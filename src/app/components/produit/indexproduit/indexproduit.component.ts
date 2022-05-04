import { Component, OnInit } from '@angular/core';
import { SouscategorieService } from 'src/app/services/souscategorie.service';
import { product } from "../../../models/produit.model";
import { souscategorie } from "../../../models/souscategorie.model";

import { ProduitService } from "../../../services/produit.service";

@Component({
  selector: 'app-indexproduit',
  templateUrl: './indexproduit.component.html',
  styleUrls: ['./indexproduit.component.css']
})
export class IndexproduitComponent implements OnInit {

  products: product[] = [];
  souscategories: souscategorie[] = [];

  souscategorie={
    Titre:'',
    id: '',
  }

  constructor(private produitService:ProduitService , private souscategorieService:SouscategorieService ) { 

    
  }

  ngOnInit(): void {

    this.souscategorieService.getAllData().subscribe((data: souscategorie[])=>{
      this.souscategories = data;
      console.log(this.souscategories);
    })  
    this.produitService.all().subscribe((data: product[])=>{
      this.products = data;
      console.log(this.products);
    })  
  }

  
    deleteproduct(id:string){
      this.produitService.delete(id).subscribe(res => {
        this.products = this.products.filter(item => item.id !== id);
       alert('Product deleted successfully!');
   })
    }
}
