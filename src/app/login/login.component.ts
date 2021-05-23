import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { RestoService } from '../resto.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  alert: boolean = false
  format = /[a-z A-Z 0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  login = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern(this.format)])
  })

  constructor(private resto: RestoService) { }

  ngOnInit() {
  }

  collection() {
    console.warn(this.login.value)
    this.resto.loginUser(this.login.value).subscribe((result) => {
      console.warn("result", result)
      this.alert = true;
      this.login.reset({})

    })
  }

  closeAlert() {
    this.alert = false;
  }

  get email() { return this.login.get('email') }
  get password() { return this.login.get('password') }


}
