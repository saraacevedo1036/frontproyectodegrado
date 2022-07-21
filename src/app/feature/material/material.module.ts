import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatButtonModule} from '@angular/material/button'
import {MatGridListModule} from '@angular/material/grid-list'
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatError, MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule, 
    MatButtonModule,
    MatInputModule,
    FormsModule, 
    MatGridListModule,
    MatDialogModule,
    MatTableModule,
    MatSelectModule,
    MatOptionModule,
    MatIconModule,
    MatFormFieldModule,
    MatCheckboxModule,

    
       

  ],
  exports:[
    MatToolbarModule, 
    MatButtonModule,
    MatInputModule,
    FormsModule, 
    MatGridListModule,
    MatDialogModule,
    MatTableModule,
    MatSelectModule,
    MatOptionModule,
    MatIconModule,
    MatFormFieldModule,
    MatCheckboxModule,

  ]
})
export class MaterialModule { }
