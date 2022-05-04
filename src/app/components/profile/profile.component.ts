import { Component, OnInit } from '@angular/core';
import {user} from "../../models/user.model";
import { UserService } from "../../services/user.service";
import { JwtService } from "../../jwt.service";
import jwtDecode from 'jwt-decode';
import { Router,ActivatedRoute} from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})




export class ProfileComponent implements OnInit {
  token:any;
  data:any;
  form!: FormGroup;
  id!: any;

user:user={
email:'',
firstname:'',
lastname:'',
roles:'',
id:''

}
  submitted= false;


  constructor(private jwtService:JwtService,public router: Router,   public userService: UserService,    private route: ActivatedRoute,
    ) { }


  

  ngOnInit(): void {
  
    this.token = localStorage.getItem('access_token');

    this.data = jwtDecode(this.token);
    this.user=this.data.user;
    console.log(this.data);



    this.form = new FormGroup({

      firstname: new FormControl('',[Validators.required]),
      lastname: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required ,  Validators.email]),
    //  id: new FormControl('',[Validators.required ,  ]),
    //  roles: new FormControl('',[Validators.required ,  ]),

       });
}


submit(){
  this.submitted = true;
  if (this.form.invalid) {
    alert("PLEASE VERIFY YOUR INFORMATIONS!!" );

  }
  else {
    this.userService.update(this.id, this.form.value).subscribe((res:any) => {
      alert('User updated successfully!');
      this.router.navigateByUrl('user/index');
 })
  }
 
}
logout() {
  localStorage.removeItem('access_token');
  this.router.navigate(['/login']);
}

 loggedIn(){
  return localStorage.getItem('access_token') ;
}
}
