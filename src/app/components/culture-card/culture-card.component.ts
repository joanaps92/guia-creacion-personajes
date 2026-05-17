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

  getSkillsArray() {
    return Object.entries(this.culture.skills).map(([name, value]) => ({
      name: name.charAt(0).toUpperCase() + name.slice(1),
      value
    }));
  }
}
