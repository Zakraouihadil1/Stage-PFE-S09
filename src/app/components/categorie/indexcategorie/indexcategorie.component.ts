import { Component, OnInit } from '@angular/core';
import { categorie } from 'src/app/models/categorie.model';
import { CategorieService } from "../../../services/categorie.service";
@Component({
  selector: 'app-indexcategorie',
  templateUrl: './indexcategorie.component.html',
  styleUrls: ['./indexcategorie.component.css']
})
export class IndexcategorieComponent implements OnInit {

  categories: categorie[] = [];
  constructor(private categorieService:CategorieService) { }

  ngOnInit(): void {
    this.categorieService.getAllData().subscribe((data: categorie[])=>{
      this.categories = data;
      console.log(this.categories);
    })  
  }

  
    deletecategorie(id:string){
      this.categorieService.delete(id).subscribe(res => {
        this.categories = this.categories.filter(item => item.id !== id);
       alert('Categorie deleted successfully!');
   })
    }

}
