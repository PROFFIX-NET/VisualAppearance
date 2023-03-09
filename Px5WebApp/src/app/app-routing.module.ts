import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardPageComponent } from './card-page/card-page.component';
import { FormPageComponent } from './form-page/form-page.component';
import { TablePageComponent } from './table-page/table-page.component';

const routes: Routes = [
  { path: 'card', component: CardPageComponent },
  { path: 'table', component: TablePageComponent },
  { path: 'form', component: FormPageComponent },
  { path: '', pathMatch: 'full', redirectTo: 'card' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
