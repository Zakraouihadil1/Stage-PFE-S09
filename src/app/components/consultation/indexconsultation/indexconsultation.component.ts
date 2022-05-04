import { Component, OnInit } from '@angular/core';
import { consultation } from 'src/app/models/consultation.model';
import { AbstractControl, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import Validation from '../../utils/validation';


import { ConsultationService } from "../../../services/consultation.service";

@Component({
  selector: 'app-indexconsultation',
  templateUrl: './indexconsultation.component.html',
  styleUrls: ['./indexconsultation.component.css']
})
export class IndexconsultationComponent implements OnInit {

  consultations: consultation[] = [];
  constructor(private consultationService:ConsultationService) { }

  ngOnInit(): void {
    this.consultationService.getAllData().subscribe((data: consultation[])=>{
      this.consultations = data;
      console.log(this.consultations);
    })  
  }

  
    deleteconsultation(id:string){
      this.consultationService.delete(id).subscribe(res => {
        this.consultations = this.consultations.filter(item => item.id !== id);
        alert('Consultation deleted successfully!');
   })
    }

}
