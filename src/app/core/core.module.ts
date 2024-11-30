import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallApiService } from './services/api.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [CallApiService],  // Registre o serviço aqui
})
export class CoreModule { }
