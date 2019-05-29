import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


export interface Salas {
  value: string;
}
export interface Turnos {
  value: string;
}


@Component({
  selector: 'app-reunion-reservation',
  templateUrl: './reunion-reservation.component.html',
  styleUrls: ['./reunion-reservation.component.css']
})
export class ReunionReservationComponent implements OnInit {

  selectedValues: any = {
    sala: String,
    turno: String,
    fecha: String
  };


  salas: Salas[] = [
    {value: 'Sala1'},
    {value: 'Sala2'}
  ];

  turnos: Turnos[] = [
    {value: '08:00 - 09:00'},
    {value: '09:00 - 10:00'},
    {value: '10:00 - 11:00'},
    {value: '11:00 - 12:00'}
  ];


  constructor(
    public dialogRef: MatDialogRef<ReunionReservationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}


  ngOnInit() {
  }

  save() {
    this.selectedValues = {
      sala: this.selectedValues.sala,
      turno: this.selectedValues.turno,
      fecha: this.selectedValues.fecha
    };
    console.log(this.selectedValues);
    this.dialogRef.close( this.selectedValues );
  }

}
