import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultationService } from "../../../services/consultation.service";
import { consultation } from '../../../models/consultation.model';


@Component({
  selector: 'app-editconsultation',
  templateUrl: './editconsultation.component.html',
  styleUrls: ['./editconsultation.component.css']
})
export class EditconsultationComponent implements OnInit {

  id!: string;
  consultation!: consultation;
  form!: FormGroup;
  submitted = false;

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public consultationService: ConsultationService,
    private route: ActivatedRoute,
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
      
    this.form = new FormGroup({

      Date: new FormControl('',[Validators.required, ]),
      Lieu: new FormControl('',[Validators.required]),
      sujet: new FormControl('',[Validators.required ,  ]),
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
      this.consultationService.update(this.id, this.form.value).subscribe((res:any) => {
        alert('Consultation updated successfully!');
        this.router.navigateByUrl('consultation/index');
   })

   
    }


   


  


   
  }
   

}
