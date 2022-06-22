import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatButtonModule} from '@angular/material/button'
import {MatGridListModule} from '@angular/material/grid-list'
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule, 
    MatButtonModule,
    MatInputModule,
    FormsModule, 
    MatGridListModule,
    MatDialogModule 
  ],
  exports:[
    MatToolbarModule, 
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatGridListModule,
    MatDialogModule
  ]
})
export class MaterialModule { }
