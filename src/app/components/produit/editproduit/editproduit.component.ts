import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from "../../../services/produit.service";
import { product} from "../../../models/produit.model";
@Component({
  selector: 'app-editproduit',
  templateUrl: './editproduit.component.html',
  styleUrls: ['./editproduit.component.css']
})
export class EditproduitComponent implements OnInit {

  id!: string;
  product!: product;
  form!: FormGroup;
  submitted = false;

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public produitService: ProduitService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['productId'];
    this.produitService.find(this.id).subscribe((data: product)=>{
      this.product = data;
    }); 
      
    this.form = new FormGroup({

      name: new FormControl('', Validators.required),
        Description: new FormControl('', Validators.required ),
        file: new FormControl('', Validators.required),
        prixuht: new FormControl('', Validators.required),
        qte: new FormControl('', Validators.required),

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
      this.produitService.update(this.id, this.form.value).subscribe((res:any) => {
        alert('Product updated successfully!');
        this.router.navigateByUrl('product/index');
   })

   
    }

   


   
  }


}
