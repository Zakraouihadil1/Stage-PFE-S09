import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { devis } from "../../../models/devis.model";
import { DevisService } from "../../../services/devis.service";
@Component({
  selector: 'app-devisusercreate',
  templateUrl: './devisusercreate.component.html',
  styleUrls: ['./devisusercreate.component.css']
})
export class DevisusercreateComponent implements OnInit {

  form!: FormGroup;
  submitted = false;



  constructor(private devisService:DevisService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      Date: new FormControl('', [Validators.required]),
      Titre: new FormControl('', Validators.required),
      Total: new FormControl('', Validators.required),
      Quantity: new FormControl('', Validators.required),

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
      this.devisService.create(this.form.value).subscribe((res:any) => {
        console.log('Devis created successfully!');
        this.router.navigateByUrl('devisuser/index');
   })
    }
    
  }

}
