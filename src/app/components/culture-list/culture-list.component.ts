import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CultureService } from '../../services/culture.service';
import { Culture } from '../../models/culture.model';
import { CultureCardComponent } from '../culture-card/culture-card.component';

@Component({
  selector: 'app-culture-list',
  standalone: true,
  imports: [CommonModule, FormsModule, CultureCardComponent],
  templateUrl: './culture-list.component.html',
  styleUrls: ['./culture-list.component.css']
})
export class CultureListComponent implements OnInit {
  cultures: Culture[] = [];
  selectedCulture: Culture | null = null;
  loading = true;
  isStriderMode = false;

  constructor(private cultureService: CultureService, private cdr: ChangeDetectorRef) {}

  toggleStriderMode() {
    this.isStriderMode = !this.isStriderMode;
    this.cdr.markForCheck();
  }

  ngOnInit() {
    this.cultureService.getCultures().subscribe({
      next: (data) => {
        this.cultures = data;
        this.loading = false;
        this.cdr.markForCheck();
      },
      error: (err) => {
        console.error('Error fetching cultures', err);
        this.loading = false;
        this.cdr.markForCheck();
      }
    });
  }
}
