import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from './app-material/app-material.module';
import { LoginComponent } from './login/login.component';
import { ErroAlertComponent } from './erro-alert/erro-alert.component';




@NgModule({
  declarations: [
    LoginComponent,
    ErroAlertComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    AppMaterialModule,
    LoginComponent,
    ErroAlertComponent
  ]
})
export class SharedModule { }
