import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})

export class FormularioComponent implements OnInit {
  @Input() aldeas: string[] = [];

  myForm!: FormGroup;
  f: any;
  showFormValues: boolean = false;

  constructor(private formBuilder: FormBuilder, private dataService: DataService) {}

  ngOnInit(): void {

    this.myForm = this.formBuilder.group({
      // Define tus campos y validaciones aquí
      username: ['', [Validators.required, Validators.minLength(5)]],
      villaje: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}')]]
    });

    // Asignar los controles del formulario a la propiedad 'f'
    this.f = this.myForm.controls;
  }

  submitForm() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
      // Agregar el nuevo usuario a la lista de personas en el servicio de datos
      this.dataService.agregarPersona({
        nombre: this.myForm.value.username,
        aldea: this.myForm.value.villaje
      });

      // Aquí puedes agregar la lógica para enviar el formulario
      this.showFormValues = true;
    }
  }

}
