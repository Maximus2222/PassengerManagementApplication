import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Passenger } from '../../models/passenger';
import { PassengerService } from '../passenger.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-passenger-form',
  imports: [FormsModule],
  templateUrl: './passenger-form.html',
  styleUrl: './passenger-form.css',
})
export class PassengerForm {
  constructor(
    private passengerService: PassengerService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  passenger: Passenger = {
    id: 0,
    preName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    trainNumber: '',
  };

  errorMessage: string = '';
  isEditing = false;
  routeId: number = 0;

  ngOnInit(): void {
    this.route.paramMap.subscribe((result) => {
      if (result.has('id')) {
        this.routeId = Number(result.get('id'));
        this.passengerService.getPassengerById(this.routeId).subscribe({
          next: (result) => {
            this.passenger = result;
          },
          error: (err) => {
            console.error(err);
            this.errorMessage = `Bad stuff happened (${err.status}).`;
            alert('OBIHOERN KENOEBI!');
          },
        });
        this.isEditing = true;
      }
    });
  }

  onSubmit() {
    if (!this.isEditing) {
      this.passengerService.createPassenger(this.passenger).subscribe({
        next: () => {
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error(err);
          this.errorMessage = `Error is there: ${err.status}`;
          alert('BAAWP!');
        },
      });
    } else {
      this.passengerService.editPassenger(this.passenger).subscribe({
        next: () => {
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error(err);
          this.errorMessage = `Error is there: ${err.status}`;
          alert('BAAWP!');
        },
      });
    }
  }
}
