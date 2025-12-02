import { Component } from '@angular/core';
import { Passenger } from '../../models/passenger';
import { PassengerService } from '../passenger.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-passenger-table',
  imports: [CommonModule],
  templateUrl: './passenger-table.html',
  styleUrl: './passenger-table.css',
})
export class PassengerTable {
  passengers: Passenger[] = [];

  constructor(private passengerService: PassengerService, private router: Router) {}

  ngOnInit() {
    this.passengerService.getPassengers().subscribe((data: Passenger[]) => {
      this.passengers = data;
    });
  }

  deletePassenger(id: number) {
    this.passengerService.deletePassenger(id).subscribe({
      next: () => {
        this.passengers = this.passengers.filter((p) => p.id != id);
      },
      error: (err) => {
        console.error('This passenger deletion wasnt successfull. Reason: ', err.message);
        alert('Not today!');
      },
    });
  }
  editPassenger(id: number): void {
    this.router.navigate(['edit', id]);
  }
}
