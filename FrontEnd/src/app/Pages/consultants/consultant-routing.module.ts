import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddConsultantComponent } from './add-consultant/add-consultant.component';
import { ConsultantsComponent } from './consultants.component';
import { EditConsultantComponent } from './edit-consultant/edit-consultant.component';
import { ListConsultantsComponent } from './list-consultants/list-consultants.component';
import { RemoveConsultantComponent } from './remove-consultant/remove-consultant.component';

const routes: Routes = [
  {
    path: 'consultants',
    component: ConsultantsComponent,
    children: [
      {
        path: '',
        component: ListConsultantsComponent,
        children: [{ path: 'add', component: AddConsultantComponent },
      {path: ':id/delete',component: RemoveConsultantComponent}],
      },
      {
        path: ':id',
        children: [{ path: 'edit', component: EditConsultantComponent }],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ConsultantRoutingModule {}
