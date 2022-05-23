import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-visitante',
  templateUrl: './visitante.component.html',
  styleUrls: ['./visitante.component.css']
})
export class VisitanteComponent implements OnInit {
  form:any;
  nombresInvalid(){
   return this.form.get('nombres').invalid && this.form.get('nombres').touched
  }
  apellidosInvalid(){
   return  this.form.get('apellidos').invalid && this.form.get('apellidos').touched
  }
  telefonoInvalid(){
   return this.form.get('telefono').invalid && this.form.get('telefono').touched
  }
emailInvalid(){
  return this.form.get('email').invalid && this.form.get('email').touched
}
areaInvalid(){
  return this.form.get('area').invalid && this.form.get('area').touched
}
encargadoInvalid(){
  return this.form.get('encargado').invalid && this.form.get('encargado').touched
}



  constructor(private fb:FormBuilder ) {
    this.formulario();
   }
   formulario(){
     this.form=this.fb.group({
      nombres:['',Validators.required],
      apellidos:['',Validators.required],
      telefono:['',Validators.required],
      email:['',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      area:['',Validators.required],
      encargado:['',Validators.required]
     })
   }

  ngOnInit(): void {
  }
  guardar(){
    console.log(this.form);
    if(this.form.invalid)
    {
      return Object.values(this.form.controls).forEach(control => {
        this.form.markAllAsTouched();
        
      });
  }
}
}