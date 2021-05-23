import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import {ActivatedRoute} from '@angular/router'
import {RestoService} from '../resto.service'

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {
  alert: boolean=false
  format = /[a-z A-Z 0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  editResto = new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    address:new FormControl('')
  })

  constructor( private router:ActivatedRoute,private resto:RestoService) { }

  ngOnInit() {
    console.warn(this.router.snapshot.params.id);
    this.resto.getCurrentResto(this.router.snapshot.params.id).subscribe((result)=>{
      this.editResto = new FormGroup({
        name:new FormControl(result['name'] ,[Validators.required,Validators.minLength(3),Validators.maxLength(15),Validators.pattern('[a-z A-Z]*')]),
        email:new FormControl(result['email'] ,[Validators.required,Validators.email]),
        address:new FormControl(result['address'] ,[Validators.required,Validators.minLength(3),Validators.maxLength(20),Validators.pattern(this.format)])
      })
    });
  }

  collection(){
    console.warn(this.editResto.value)
    this.resto.updateResto(this.router.snapshot.params.id,this.editResto.value)
     .subscribe((result)=>{
        console.warn(result)
        this.alert = true;
        
     })
  }

  closeAlert(){
    this.alert = false;
  
  }

  get email(){return this.editResto.get('email')}
  get name(){return this.editResto.get('name')}
  get address(){return this.editResto.get('address')}

}
