import { Component, OnInit } from '@angular/core';
import { ProjetService } from "../../../services/projet.service"
import { projet } from 'src/app/models/projet.model';
import { AbstractControl, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-createprojetuser',
  templateUrl: './createprojetuser.component.html',
  styleUrls: ['./createprojetuser.component.css']
})
export class CreateprojetuserComponent implements OnInit {

  form!: FormGroup;
  submitted = false;



  constructor(private projetService:ProjetService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      Titre: new FormControl('',[Validators.required]),
    Description: new FormControl('',[Validators.required]),
  M1: new FormControl('',),
  Process: new FormControl('',),
    Machines: new FormControl('',),

    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){

    this.submitted = true;
    if (this.form.invalid) {
      alert("PLEASE VERIFY YOUR INFORMATIONS!!" );

    }
    else {
      this.projetService.create(this.form.value).subscribe((res:any) => {
        alert('Etude Projet created successfully!');
        this.router.navigateByUrl('projetuser/index');
   })
    }
    
  }
}
