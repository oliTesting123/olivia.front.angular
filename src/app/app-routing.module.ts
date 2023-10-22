import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/users/views/dashboard/dashboard.component';
import { EditUserComponent } from './modules/users/components/edit-user/edit-user.component';

const routes: Routes = [
  
  {
    path: '', component: DashboardComponent
  },
  {
    path: 'edit', component: EditUserComponent,
  },
  // { 
  //   path: 'delete', component: DeleteUserComponent
  // },

  // { path: 'h', loadChildren: () => import('./modules/modules.module').then(m => m.ModulesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
