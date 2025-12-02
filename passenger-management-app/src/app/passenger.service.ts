import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Passenger } from '../models/passenger';

@Injectable({
  providedIn: 'root',
})
export class PassengerService {
  private apiUrl = `${environment.apiUrl}/passengers`;

  constructor(private http: HttpClient) {}

  getPassengers(): Observable<Passenger[]> {
    return this.http.get<Passenger[]>(this.apiUrl);
  }
  getPassengerById(id: number): Observable<Passenger> {
    return this.http.get<Passenger>(`${this.apiUrl}/${id}`);
  }

  createPassenger(passenger: Passenger): Observable<Passenger> {
    return this.http.post<Passenger>(this.apiUrl, passenger);
  }

  deletePassenger(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  editPassenger(passenger: Passenger): Observable<Passenger> {
    return this.http.put<Passenger>(
      `${this.apiUrl}/${passenger.id}`,
      passenger
    );
  }
}
