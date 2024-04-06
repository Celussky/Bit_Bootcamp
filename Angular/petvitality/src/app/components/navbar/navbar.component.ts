import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  contactoForm: FormGroup
  regexAlfabetico = /^[A-Za-z ]+$/
  regexNumericos = /^[0-9]+$/
  regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/


  constructor(private fb: FormBuilder) {
    this.contactoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern(this.regexAlfabetico)]],
      correo: ['', [Validators.required, Validators.pattern(this.regexEmail)]],
      telefono: ['', [Validators.required, Validators.pattern(this.regexNumericos)]],
      mensaje: ['', [Validators.required]]
    })
  }

  registrarContacto() {
    console.log(this.contactoForm);
  }

}
