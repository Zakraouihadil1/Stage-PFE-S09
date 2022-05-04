import { Component, OnInit } from '@angular/core';
import { rendezvous } from 'src/app/models/rendezvous.model';
import { AbstractControl, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import Validation from '../../utils/validation';
import { RendezvousService } from "../../../services/rendezvous.service"
@Component({
  selector: 'app-indexrendezvous',
  templateUrl: './indexrendezvous.component.html',
  styleUrls: ['./indexrendezvous.component.css']
})
export class IndexrendezvousComponent implements OnInit {

  rendezvous: rendezvous[] = [];
  constructor(private rendezvousService:RendezvousService) { }

  ngOnInit(): void {
    this.rendezvousService.getAllData().subscribe((data: rendezvous[])=>{
      this.rendezvous = data;
      console.log(this.rendezvous);
    })  
  }

  
    deleterendezvous(id:string){
      this.rendezvousService.delete(id).subscribe(res => {
        this.rendezvous = this.rendezvous.filter(item => item.id !== id);
       alert('Rendezvous deleted successfully!');
   })
    }

}
