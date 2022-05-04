import { Component, OnInit } from '@angular/core';
import { consultation } from 'src/app/models/consultation.model';
import { ConsultationService } from "../../../services/consultation.service";
import { user } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { JwtService } from 'src/app/jwt.service';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-indexconsultationuser',
  templateUrl: './indexconsultationuser.component.html',
  styleUrls: ['./indexconsultationuser.component.css']
})
export class IndexconsultationuserComponent implements OnInit {


  consultations: consultation[] = [];
  users: user[] = [];
  data:any;
  token:any;
  user={
    firstname:'',
    email: '',
    lastname:'',
    id:'',
    password:'',
    roles:''
  }
  constructor(private consultationService:ConsultationService,private userService:UserService, private jwtService:JwtService) { }

  ngOnInit(): void {

   
      this.token = localStorage.getItem('access_token');

      this.data = jwtDecode(this.token);
  

 

    

    this.userService.getAllData().subscribe((data: user[])=>{
      this.users = data;
      console.log(this.users);
    })  
    this.consultationService.findbyuserid(this.data.id).subscribe((data: consultation[])=>{
      this.consultations = data;
      console.log(this.consultations);
    })  

  /*this.consultationService.getAllData().subscribe((data: consultation[])=>{
      this.consultations = data;
      console.log(this.consultations);
    }) */ 
  }

  
    deleteconsultation(id:string){
      this.consultationService.delete(id).subscribe(res => {
        this.consultations = this.consultations.filter(item => item.id !== id);
        alert('Consultation deleted successfully!');
   })
    }
}
