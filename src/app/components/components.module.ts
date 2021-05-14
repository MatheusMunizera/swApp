import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwHeaderComponent } from './sw-header/sw-header.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SwHeaderComponent
  ],
  exports: [ //deixar publico
    SwHeaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class ComponentsModule { }
