import { Component, OnInit } from '@angular/core';
import { souscategorie } from 'src/app/models/souscategorie.model';
import { SouscategorieService } from "../../../services/souscategorie.service";

@Component({
  selector: 'app-indexsouscategorie',
  templateUrl: './indexsouscategorie.component.html',
  styleUrls: ['./indexsouscategorie.component.css']
})
export class IndexsouscategorieComponent implements OnInit {

  

  souscategories: souscategorie[] = [];
  constructor(private souscategorieService:SouscategorieService) { }

  ngOnInit(): void {
    this.souscategorieService.getAllData().subscribe((data: souscategorie[])=>{
      this.souscategories = data;
      console.log(this.souscategories);
    })  
  }

  
    deletecategorie(id:string){
      this.souscategorieService.delete(id).subscribe(res => {
        this.souscategories = this.souscategories.filter(item => item.id !== id);
       alert('SousCategorie deleted successfully!');
   })
    }

}
