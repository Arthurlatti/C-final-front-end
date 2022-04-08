import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Vacation } from '../Models/vacation';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VacationService {

    baseUrl = 'http://localhost:5000/api/Vacation';

  constructor(private http: HttpClient) { }

  getVacationList(): Observable<Vacation[]> {
   return this.http.get<Vacation[]>(this.baseUrl);
  }
  
  createVacation(vacation: Vacation) {
    return this.http.post(this.baseUrl, vacation);
  }

  updateVacation(vacation: Vacation) {
    const url =this.baseUrl + vacation.id;
    return this.http.put(url, vacation);
  }
  deleteVacation(id: Number) {
    const url =this.baseUrl + id;
    return this.http.delete(url);
  }
}
