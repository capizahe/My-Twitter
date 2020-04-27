import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public user:User = new User();

  constructor(private router:Router,private userService:UserService) { }

   addUser(){
    this.userService.addUser(this.user);
    localStorage.setItem("email",this.user.email)
    localStorage.setItem("loggedin",'yes')
    this.resetReg();
  }

  ngOnInit() {
    this.userService.getUsers();
  }
  
  resetReg(){
    this.userService.selectedUser = new User();
    this.router.navigate(['/tweets']);

  }

}
 