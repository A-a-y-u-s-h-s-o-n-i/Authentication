import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(register: NgForm) {
    if (!register.valid) {
      return;
    }
    const name = register.value.name;
    const email = register.value.email;
    const password = register.value.password;
    const conpass = register.value.conpass;
    if (password !== conpass) {
      return this.onSubmit;
    }
    this.authService.register(name, email, password, conpass).subscribe(resData => {
      console.log(resData);
    });
    register.reset();
  }
}
