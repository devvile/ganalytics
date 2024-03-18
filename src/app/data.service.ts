import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getTilesData() {
    return this.http.get<any>('https://run.mocky.io/v3/bf0863ae-6a7a-476c-8754-dfe6fe39830d');
  }
}