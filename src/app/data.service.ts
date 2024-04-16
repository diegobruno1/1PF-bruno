import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  personas: any[] = [
    { nombre: 'Hidan', aldea: 'Aldea de las Aguas Termales' },
    { nombre: 'Sasori', aldea: 'Aldea Oculta de la Arena' },
    { nombre: 'Kakuzu', aldea: 'Aldea Oculta de la Cascada' },
    { nombre: 'Deidara', aldea: 'Aldea Oculta entre las Rocas' },
    { nombre: 'Kisame', aldea: 'Aldea Oculta de la Niebla' },
    { nombre: 'Itachi', aldea: 'Aldea Oculta de la Hoja' },
    { nombre: 'Zetsu', aldea: 'Se desconoce' },
    { nombre: 'Obito', aldea: 'Aldea Oculta de la Hoja' }
  ];

  constructor() { }

  agregarPersona(persona: any) {
    this.personas.push(persona);
  }

  obtenerPersonas(): any[] {
    return this.personas;
  }
}
