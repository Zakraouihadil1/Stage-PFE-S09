import { Component, OnInit } from '@angular/core';
import { ProjetService } from "../../../services/projet.service"
import { projet } from 'src/app/models/projet.model';

import { AbstractControl, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-viewprojetuser',
  templateUrl: './viewprojetuser.component.html',
  styleUrls: ['./viewprojetuser.component.css']
})
export class ViewprojetuserComponent implements OnInit {

  id!: string;
  projet!:projet;

  form: FormGroup = new FormGroup({
    Titre: new FormControl('',[Validators.required]),
    Description: new FormControl('',[Validators.required]),
    M1: new FormControl('',[Validators.required]),
    Process: new FormControl('',[Validators.required]),
    Machines: new FormControl('',[Validators.required]),

    

  });

  constructor(
    private projetService:ProjetService, private route: ActivatedRoute, private router: Router) { }
     
   
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['projetId'];
         
    this.projetService.find(this.id).subscribe((data: projet)=>{
      this.projet = data;
    });
  }

}
