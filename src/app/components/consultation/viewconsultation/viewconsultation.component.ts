import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractControl, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { consultation } from "../../../models/consultation.model";
import { ConsultationService } from "../../../services/consultation.service";

@Component({
  selector: 'app-viewconsultation',
  templateUrl: './viewconsultation.component.html',
  styleUrls: ['./viewconsultation.component.css']
})
export class ViewconsultationComponent implements OnInit {

  id!: string;
  consultation!:consultation;

  form: FormGroup = new FormGroup({
    Date: new FormControl('',[Validators.required]),
    Lieu: new FormControl('',[Validators.required]),
    sujet: new FormControl('',[Validators.required]),
    

  });

  constructor(
    private consultationService:ConsultationService,     private route: ActivatedRoute,
    private router: Router
   ) { }
     
   
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['consultationId'];
         
    this.consultationService.find(this.id).subscribe((data: consultation)=>{
      this.consultation = data;
    });
  }

}
