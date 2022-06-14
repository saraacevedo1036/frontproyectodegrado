import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatButtonModule} from '@angular/material/button'
import {MatGridListModule} from '@angular/material/grid-list'
import { MatInputModule } from '@angular/material/input';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule, 
    MatButtonModule,
    MatInputModule,
    FormsModule, 
    MatGridListModule 
  ],
  exports:[
    MatToolbarModule, 
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatGridListModule
  ]
})
export class MaterialModule { }
