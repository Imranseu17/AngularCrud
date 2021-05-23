import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import {RestoService} from '../resto.service'

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {
  alert:boolean = false
  format = /[a-z A-Z 0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
 
  addResto = new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(15),Validators.pattern('[a-z A-Z]*')]),
    email:new FormControl('',[Validators.required,Validators.email]),
    address:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(30),Validators.pattern(this.format)])
    
  })

  constructor(private resto:RestoService) { }

  ngOnInit() {
  }

  collectResto(){
    //console.warn(this.addResto.value)
    this.resto.saveResto(this.addResto.value).subscribe((result)=>{
      this.alert = true;
      this.addResto.reset({})
    });
    
  }

  closeAlert(){
    this.alert=false
  }

  get email(){return this.addResto.get('email')}
  get name(){return this.addResto.get('name')}
  get address(){return this.addResto.get('address')}

}
