import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ConsultantsComponent } from './consultants.component';
import { AddConsultantComponent } from './add-consultant/add-consultant.component';
import { ConsultantRoutingModule } from './consultant-routing.module';
import { ListConsultantsComponent } from './list-consultants/list-consultants.component';
import { EditConsultantComponent } from './edit-consultant/edit-consultant.component';
import { FormsModule } from '@angular/forms';
import { AddEditConsultantComponent } from './add-edit-consultant/add-edit-consultant.component';
import { ConsultantService } from './consultant.service';
import { OrderModule } from 'ngx-order-pipe';
import { RemoveConsultantComponent } from './remove-consultant/remove-consultant.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ConsultantsComponent,AddConsultantComponent, ListConsultantsComponent, EditConsultantComponent, AddEditConsultantComponent, RemoveConsultantComponent],
  imports: [
    CommonModule,
    ConsultantRoutingModule,
    FormsModule,
    OrderModule,
    HttpClientModule
  ],
  providers: [ConsultantService,DatePipe],
  exports: [ConsultantsComponent]
})
export class ConsultantModule { }
