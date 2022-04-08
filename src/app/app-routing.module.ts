import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VacationListComponent } from './components/vacation-list/vacation-list.component';
import { VacationNewComponent } from './components/vacation-new/vacation-new.component';

const routes: Routes = [
{
  path: '',
  pathMatch: 'full',
  component: VacationListComponent
},

{
  path: 'new',
  component: VacationNewComponent
}
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
