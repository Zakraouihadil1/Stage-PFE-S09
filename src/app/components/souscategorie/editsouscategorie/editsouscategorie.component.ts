import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SouscategorieService } from "../../../services/souscategorie.service";
import { souscategorie} from "../../../models/souscategorie.model";
@Component({
  selector: 'app-editsouscategorie',
  templateUrl: './editsouscategorie.component.html',
  styleUrls: ['./editsouscategorie.component.css']
})
export class EditsouscategorieComponent implements OnInit {

 
  id!: string;
  souscategorie!: souscategorie;
  form!: FormGroup;
  submitted = false;

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public souscategorieService: SouscategorieService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['souscategorieId'];
    this.souscategorieService.find(this.id).subscribe((data: souscategorie)=>{
      this.souscategorie = data;
    }); 
      
    this.form = new FormGroup({

      Titre: new FormControl('',[Validators.required, ]),
     
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
      this.souscategorieService.update(this.id, this.form.value).subscribe((res:any) => {
        alert('SousCategorie updated successfully!');
        this.router.navigateByUrl('souscategorie/index');
   })

   
    }

   


   
  }


}
