import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})
export class AdministracionComponent implements OnInit {
  form:any;
  idInvalid(){
    return this.form.get('id').invalid && this.form.get('id').touched
  }
  passwordInvalid(){
    return this.form.get('password').invalid && this.form.get('password').touched
  }

  constructor(private fb:FormBuilder) { 
    this.formA();
  }

  ngOnInit(): void {
  }
  formA(){
    this.form = this.fb.group({
      id:['', Validators.required],
      password: ['', Validators.required],
    })  
  }
  save(){
    console.log(this.form);
    if(this.form.invalid){
      return Object.values(this.form.controls).forEach(control =>{
        this.form.markAllAsTouched();
      })
    }}  
}
