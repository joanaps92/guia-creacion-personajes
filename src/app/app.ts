import { Component, signal } from '@angular/core';
import { CultureListComponent } from './components/culture-list/culture-list.component';

@Component({
  selector: 'app-root',
  imports: [CultureListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('gui-personajes');
}
