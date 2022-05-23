import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formempleado',
  templateUrl: './formempleado.component.html',
  styleUrls: ['./formempleado.component.css']
})
export class FormempleadoComponent implements OnInit {
  form:any;
  idInvalid(){
    return this.form.get('id').invalid && this.form.get('id').touched
  }
  passwordInvalid(){
    return this.form.get('password').invalid && this.form.get('password').touched
  }


  constructor(private fb:FormBuilder) { 
    this.formE();
  }

  ngOnInit(): void {
  }
  formE(){
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
    
}
  }}
