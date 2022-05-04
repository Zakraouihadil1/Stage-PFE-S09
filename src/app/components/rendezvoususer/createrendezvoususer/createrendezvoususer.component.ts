import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RendezvousService } from "../../../services/rendezvous.service";
import { rendezvous} from "../../../models/rendezvous.model";
@Component({
  selector: 'app-createrendezvoususer',
  templateUrl: './createrendezvoususer.component.html',
  styleUrls: ['./createrendezvoususer.component.css']
})
export class CreaterendezvoususerComponent implements OnInit {

  form!: FormGroup;
  submitted = false;



  constructor(private rendezvousService:RendezvousService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      Date: new FormControl('', [Validators.required]),
      Lieu: new FormControl('', Validators.required),
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
      this.rendezvousService.create(this.form.value).subscribe((res:any) => {
        alert('RendezVous created successfully!');
        this.router.navigateByUrl('rendezvoususer/index');
   })
    }
    
  }

}
