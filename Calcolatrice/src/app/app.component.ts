import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   MyForm : FormGroup;
   risultato : Number;

   constructor(fb: FormBuilder) {
     this.MyForm = fb.group({'numero1' : ['0', Validators.required], 'numero2' : ['0', Validators.required]})
   } 

     somma() {
   this.risultato = Number(this.MyForm.controls['numero1'].value) + Number(this.MyForm.controls['numero2'].value);
   return false;
  }

  sottrazione() {
   this.risultato = Number(this.MyForm.controls['numero1'].value) - Number(this.MyForm.controls['numero2'].value);
   return false;
  }

  moltiplicazione() {
   this.risultato = Number(this.MyForm.controls['numero1'].value) * Number(this.MyForm.controls['numero2'].value);
   return false;
  }
  
  divisione() {
   this.risultato = Number(this.MyForm.controls['numero1'].value) / Number(this.MyForm.controls['numero2'].value);
   return false;
  }
}
