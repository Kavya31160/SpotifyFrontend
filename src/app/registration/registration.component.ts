import { Component } from '@angular/core';
import { User } from './user';
import { AuthService } from '../app.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
user : User = new User();
constructor(private AuthService: AuthService){

}

PostUser(){
  this.AuthService.addUser(this.user).subscribe(data=>{
    console.log(data);
       },
  error => console.log(error));
}

onSubmit(){
  console.log(this.user);
  this.PostUser();
}


}