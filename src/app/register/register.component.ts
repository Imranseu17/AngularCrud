import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import {RestoService} from '../resto.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  alert:boolean = false
  format = /[a-z A-Z 0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  register = new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(15),Validators.pattern('[a-z A-Z]*')]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10),Validators.pattern(this.format)])
  })

  constructor(private resto:RestoService) { }

  ngOnInit() {
  }

  collection(){
    console.warn(this.register.value)
    this.resto.registerUser(this.register.value).subscribe((result)=>{
      console.warn("result",result)
      this.alert = true;
      this.register.reset({})
    })
  }

  closeAlert(){
    this.alert = false;
  }

  get email(){return this.register.get('email')}
  get name(){return this.register.get('name')}
  get password(){return this.register.get('password')}

}
