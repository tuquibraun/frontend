import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


export interface Oficinas {
  value: string;
}
export interface Turnos {
  value: string;
}


@Component({
  selector: 'app-office-reservation',
  templateUrl: './office-reservation.component.html',
  styleUrls: ['./office-reservation.component.css']
})
export class OfficeReservationComponent implements OnInit {

  selectedValues: any = {
    oficina: String,
    turno: String,
    fecha: String
  };

  oficinas: Oficinas[] = [
    {value: 'oficina1'},
    {value: 'oficina2'},
    {value: 'oficina3'},
    {value: 'oficina4'}
  ];

  turnos: Turnos[] = [
    {value: '08:00 - 09:00'},
    {value: '09:00 - 10:00'},
    {value: '10:00 - 11:00'},
    {value: '11:00 - 12:00'}
  ];

  constructor(
    public dialogRef: MatDialogRef<OfficeReservationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}


  ngOnInit() {
  }

  save() {
    this.selectedValues = {
      oficina: this.selectedValues.oficina,
      turno: this.selectedValues.turno,
      fecha: this.selectedValues.fecha
    };
    console.log(this.selectedValues);
    this.dialogRef.close( this.selectedValues );
  }

}
