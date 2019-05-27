import { NgModule } from '@angular/core';

import { MatButtonModule, MatCheckboxModule, MatCardModule, MatToolbarModule, MatSidenavModule, MatIconModule,
  MatListModule, MatDialogModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatDatepickerModule,
  MatNativeDateModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';


@NgModule({
  imports: [ MatButtonModule, MatCheckboxModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule,
    MatListModule, MatCardModule, MatDialogModule, MatInputModule, MatFormFieldModule, MatSelectModule,
    MatDatepickerModule, MatNativeDateModule, MatTableModule, MatPaginatorModule, MatSortModule ],
  exports: [ MatButtonModule, MatCheckboxModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule,
    MatListModule, MatCardModule, MatDialogModule, MatInputModule, MatFormFieldModule, MatSelectModule,
    MatDatepickerModule, MatNativeDateModule, MatTableModule, MatPaginatorModule, MatSortModule ],
})
export class MaterialModule { }
