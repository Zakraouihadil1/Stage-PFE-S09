import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from "../../../services/produit.service";
import { product} from "../../../models/produit.model";
@Component({
  selector: 'app-viewproduit',
  templateUrl: './viewproduit.component.html',
  styleUrls: ['./viewproduit.component.css']
})
export class ViewproduitComponent implements OnInit {

  id!: string;
  product!:product;

  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    Description: new FormControl('', Validators.required ),
    file: new FormControl('', Validators.required),
    prixuht: new FormControl('', Validators.required),
    qte: new FormControl('', Validators.required),
    

  });

  constructor(
    private produitService:ProduitService, private route: ActivatedRoute, private router: Router) { }
     
   
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
  }

}
