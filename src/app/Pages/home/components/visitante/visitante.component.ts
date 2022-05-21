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
  

  constructor(private fb:FormBuilder ) {
    this.formulario();
   }
   formulario(){
     this.form=this.fb.group({
      nombres:['',Validators.required],
      apellidos:[' ',Validators.required],
      telefono:[' ',Validators.required],
      email:[' ',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      area:[' ',Validators.required],
      encargado:[' ',Validators.required]
     })
   }

  ngOnInit(): void {
  }
}
