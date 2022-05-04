import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieService } from "../../../services/categorie.service";
import { categorie} from "../../../models/categorie.model";


@Component({
  selector: 'app-viewcategorie',
  templateUrl: './viewcategorie.component.html',
  styleUrls: ['./viewcategorie.component.css']
})
export class ViewcategorieComponent implements OnInit {

  id!: string;
  categorie!:categorie;

  form: FormGroup = new FormGroup({
    Name: new FormControl('',[Validators.required]),
    

  });

  constructor(
    private categorieService:CategorieService, private route: ActivatedRoute, private router: Router) { }
     
   
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['categorieId'];
         
    this.categorieService.find(this.id).subscribe((data: categorie)=>{
      this.categorie = data;
    });
  }

}
