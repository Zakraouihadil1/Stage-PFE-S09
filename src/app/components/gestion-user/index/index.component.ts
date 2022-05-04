import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import Validation from '../../utils/validation';
import { UserService } from "../../../services/user.service";
import { user } from 'src/app/models/user.model';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  users: user[] = [];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getAllData().subscribe((data: user[])=>{
      this.users = data;
      console.log(this.users);
    })  
  }


   /**
   * Write code on Method
   *
   * @return response()
   */
    deleteuser(id:string){
      this.userService.delete(id).subscribe(res => {
           this.users = this.users.filter(item => item.id !== id);
          alert('User deleted successfully!');
      })
    }

}
