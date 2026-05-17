import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Culture } from '../models/culture.model';

@Injectable({
  providedIn: 'root'
})
export class CultureService {
  private dataUrl = 'data/culturas.json';

  constructor(private http: HttpClient) {}

  getCultures(): Observable<Culture[]> {
    return this.http.get<Culture[]>(this.dataUrl);
  }
}
