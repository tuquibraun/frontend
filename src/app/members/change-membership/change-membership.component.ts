import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


export interface Membresias {
  value: string;
}

@Component({
  selector: 'app-change-membership',
  templateUrl: './change-membership.component.html',
  styleUrls: ['./change-membership.component.css']
})
export class ChangeMembershipComponent implements OnInit {

  selectedValues: any = {
    membresias: String,
  };


  membresias: Membresias[] = [
    {value: 'Vip'},
    {value: 'Exclusivs'},
    {value: 'Re contra Vip'},
    {value: 'Elite'}
  ];



  constructor(
    public dialogRef: MatDialogRef<ChangeMembershipComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}


  ngOnInit() {
  }

  save() {
    this.selectedValues = {
      sala: this.selectedValues.membresias,
    };
    console.log(this.selectedValues);
    this.dialogRef.close( this.selectedValues );
  }


}
