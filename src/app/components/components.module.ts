import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwHeaderComponent } from './sw-header/sw-header.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { UserModalComponent } from './user-modal/user-modal.component';



@NgModule({
  declarations: [
    SwHeaderComponent,
    UserModalComponent
  ],
  exports: [ //deixar publico
    SwHeaderComponent,
    UserModalComponent
  ],
  imports: [
    
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class ComponentsModule { }
