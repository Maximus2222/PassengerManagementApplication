import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerTable } from './passenger-table';

describe('PassengerTable', () => {
  let component: PassengerTable;
  let fixture: ComponentFixture<PassengerTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassengerTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassengerTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
