import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultantsComponent } from './Pages/consultants/consultants.component';
import { ListConsultantsComponent } from './Pages/consultants/list-consultants/list-consultants.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'consultants',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
