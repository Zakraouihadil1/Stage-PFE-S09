import { Component, OnInit } from '@angular/core';
import { ProjetService } from "../../../services/projet.service"
import { projet } from 'src/app/models/projet.model';

import { AbstractControl, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import Validation from '../../utils/validation';
@Component({
  selector: 'app-indexprojetuser',
  templateUrl: './indexprojetuser.component.html',
  styleUrls: ['./indexprojetuser.component.css']
})
export class IndexprojetuserComponent implements OnInit {

  projet: projet[] = [];
  constructor(private projetService:ProjetService) { }

  ngOnInit(): void {
    this.projetService.getAllData().subscribe((data: projet[])=>{
      this.projet = data;
      console.log(this.projet);
    })  
  }

  
    deleteprojet(id:string){
      this.projetService.delete(id).subscribe(res => {
        this.projet = this.projet.filter(item => item.id !== id);
        alert('Projet deleted successfully!');
   })
    }
}
