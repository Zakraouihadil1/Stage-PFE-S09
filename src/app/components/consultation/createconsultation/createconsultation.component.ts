import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConsultationService } from "../../../services/consultation.service";
import { consultation } from '../../../models/consultation.model';




@Component({
  selector: 'app-createconsultation',
  templateUrl: './createconsultation.component.html',
  styleUrls: ['./createconsultation.component.css']
})
export class CreateconsultationComponent implements OnInit {

  form!: FormGroup;
  submitted = false;



  constructor(private consultationService:ConsultationService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      Date: new FormControl('', [Validators.required]),
      Lieu: new FormControl('', Validators.required),
      sujet: new FormControl('', Validators.required),
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
      this.consultationService.create(this.form.value).subscribe((res:any) => {
        console.log('Consultation created successfully!');
        this.router.navigateByUrl('consultation/index');
   })
    }
    
  }

}
