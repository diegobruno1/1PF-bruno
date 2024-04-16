import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrl: './data-list.component.scss'
})
export class DataListComponent {
  personas: any[] = [
  // { nombre: 'Hidan', aldea: 'Aldea de las Aguas Termales' },
  // { nombre: 'Sasori', aldea: 'Aldea Oculta de la Arena' },
  // { nombre: 'Kakuzu', aldea: 'Aldea Oculta de la Cascada' },
  // { nombre: 'Deidara', aldea: 'Aldea Oculta entre las Rocas' },
  // { nombre: 'Kisame', aldea: 'Aldea Oculta de la Niebla' },
  // { nombre: 'Itachi', aldea: 'Aldea Oculta de la Hoja' },
  // { nombre: 'Zetsu', aldea: 'Se desconoce' },
  // { nombre: 'Obito', aldea: 'Aldea Oculta de la Hoja' }
];
aldeas: string[] = [];

filaClicada: number = -1;

constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // Obtener la lista de personas del servicio de datos
    this.personas = this.dataService.obtenerPersonas();

    
    // Obtener la lista de personas del servicio de datos
    const personas = this.dataService.obtenerPersonas();
    // Extraer las aldeas de las personas y eliminar duplicados
    this.aldeas = Array.from(new Set(personas.map(persona => persona.aldea)));

    console.log(this.aldeas)
  }

  obtenerClaseAldea(aldea: string): string {
    switch (aldea) {
      case 'Aldea de las Aguas Termales':
        return 'aldea1';
      case 'Aldea Oculta de la Arena':
        return 'aldea2';
      case 'Aldea Oculta de la Hoja':
        return 'aldea3';
      case 'Aldea Oculta de la Niebla':
        return 'aldea4';
      case 'Aldea Oculta de la Cascada':
        return 'aldea5';
      case 'Aldea Oculta entre las Rocas':
        return 'aldea6';
      default:
        return '';
    }
  }
}
