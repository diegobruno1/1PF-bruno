import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'aldeaImagen'
})
export class AldeaImagenPipe implements PipeTransform {
  transform(aldea: string): string {
    switch (aldea) {
      case 'Aldea de las Aguas Termales':
        return '../../assets/img/aguastermales.png';
      case 'Aldea Oculta de la Arena':
        return '../../assets/img/arena.png';
      case 'Aldea Oculta de la Cascada':
        return '../../assets/img/cascada.png';
      case 'Aldea Oculta entre las Rocas':
        return '../../assets/img/roca.png';
      case 'Aldea Oculta de la Niebla':
        return '../../assets/img/niebla.png';
      case 'Aldea Oculta de la Hoja':
        return '../../assets/img/hoja.png';
      default:
        return '../../assets/img/nohay.png';
    }
  }
}
