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
      email:[' ',Validators.required],
      area:[' ',Validators.required],
      encargado:[' ',Validators.required],
      floatingTextarea2:[' ',Validators.required],
      flexRadioINE:[' ',Validators.required],
      flexRadioLICENCIA:[' ',Validators.required],
      flexRadioCREDENCIAL:[' ',Validators.required],
     })
   }

  ngOnInit(): void {
  }
}
