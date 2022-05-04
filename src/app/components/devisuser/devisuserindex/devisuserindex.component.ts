import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import Validation from '../../utils/validation';
import { devis } from "../../../models/devis.model";
import { DevisService } from "../../../services/devis.service";
@Component({
  selector: 'app-devisuserindex',
  templateUrl: './devisuserindex.component.html',
  styleUrls: ['./devisuserindex.component.css']
})
export class DevisuserindexComponent implements OnInit {

 
  devis: devis[] = [];
  constructor(private devisService:DevisService) { }

  ngOnInit(): void {
    this.devisService.getAllData().subscribe((data: devis[])=>{
      this.devis = data;
      console.log(this.devis);
    })  
  }

  
    deletedevis(id:string){
      this.devisService.delete(id).subscribe(res => {
        this.devis = this.devis.filter(item => item.id !== id);
        alert('Devis deleted successfully!');
   })
    }

}
