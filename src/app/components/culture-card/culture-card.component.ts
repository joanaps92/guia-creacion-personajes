import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Culture } from '../../models/culture.model';

@Component({
  selector: 'app-culture-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './culture-card.component.html',
  styleUrls: ['./culture-card.component.css']
})
export class CultureCardComponent {
  @Input({ required: true }) culture!: Culture;
  @Input() baseNO: number = 20;

  getSkillDisplayName(key: string): string {
    const namesMap: { [key: string]: string } = {
      impresionar: 'Impresionar',
      atletismo: 'Atletismo',
      alerta: 'Alerta',
      cazar: 'Cazar',
      cantar: 'Cantar',
      oficio: 'Oficio',
      alentar: 'Alentar',
      viajar: 'Viajar',
      perspicacia: 'Perspicacia',
      curar: 'Curar',
      cortesia: 'Cortesía',
      guerrear: 'Guerrear',
      explorar: 'Explorar',
      persuadir: 'Persuadir',
      sigilo: 'Sigilo',
      inspeccionar: 'Buscar',
      acertijos: 'Acertijos',
      saber: 'Saber'
    };
    return namesMap[key] || (key.charAt(0).toUpperCase() + key.slice(1));
  }

  getSkillsByCategory() {
    const fuerzaKeys = ['impresionar', 'atletismo', 'alerta', 'cazar', 'cantar', 'oficio'];
    const corazonKeys = ['alentar', 'viajar', 'perspicacia', 'curar', 'cortesia', 'guerrear'];

    const fuerza: any[] = [];
    const corazon: any[] = [];
    const mente: any[] = [];

    Object.entries(this.culture.skills).forEach(([key, value]) => {
      const skillObj = {
        key,
        name: this.getSkillDisplayName(key),
        value
      };

      if (fuerzaKeys.includes(key)) {
        fuerza.push(skillObj);
      } else if (corazonKeys.includes(key)) {
        corazon.push(skillObj);
      } else {
        mente.push(skillObj);
      }
    });

    // Sort to keep consistent ordering in each column
    const sortByKeys = (arr: any[], keysOrder: string[]) => {
      return arr.sort((a, b) => keysOrder.indexOf(a.key) - keysOrder.indexOf(b.key));
    };

    const menteKeys = ['persuadir', 'sigilo', 'inspeccionar', 'explorar', 'acertijos', 'saber'];

    return {
      fuerza: sortByKeys(fuerza, fuerzaKeys),
      corazon: sortByKeys(corazon, corazonKeys),
      mente: sortByKeys(mente, menteKeys)
    };
  }
}
