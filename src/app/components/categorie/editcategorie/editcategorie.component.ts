import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieService } from "../../../services/categorie.service";
import { categorie} from "../../../models/categorie.model";
@Component({
  selector: 'app-editcategorie',
  templateUrl: './editcategorie.component.html',
  styleUrls: ['./editcategorie.component.css']
})
export class EditcategorieComponent implements OnInit {


  id!: string;
  categorie!: categorie;
  form!: FormGroup;
  submitted = false;

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public categorieService: CategorieService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
    
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
      
    this.form = new FormGroup({

      Name: new FormControl('',[Validators.required, ]),
     
       });
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  get f(){
    return this.form.controls;
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  submit(){
    this.submitted = true;
    if (this.form.invalid) {
      alert("PLEASE VERIFY YOUR INFORMATIONS!!" );

    }
    else {
      this.categorieService.update(this.id, this.form.value).subscribe((res:any) => {
        alert('Categorie updated successfully!');
        this.router.navigateByUrl('categorie/index');
   })

   
    }

   


   
  }

}
