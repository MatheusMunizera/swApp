import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwHeaderComponent } from './sw-header/sw-header.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { UserModalComponent } from './user-modal/user-modal.component';
import { SwContainerComponent } from './sw-container/sw-container.component';


@NgModule({
  declarations: [
    SwHeaderComponent,
    UserModalComponent,
    SwContainerComponent
  ],
  exports: [ //deixar publico
    SwHeaderComponent,
    UserModalComponent,
    SwContainerComponent
  ],
  imports: [
    
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class ComponentsModule { }
