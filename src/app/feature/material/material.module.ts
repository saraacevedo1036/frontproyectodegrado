import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatButtonModule} from '@angular/material/button'
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule, 
    MatButtonModule,
    MatInputModule,
    FormsModule 
  ],
  exports:[
    MatToolbarModule, 
    MatButtonModule,
    MatInputModule,
    FormsModule
  ]
})
export class MaterialModule { }
