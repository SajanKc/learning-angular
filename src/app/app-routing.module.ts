import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { ViewUserComponent } from './components/view-user/view-user.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'table',
    component: UserTableComponent,
  },
  {
    path: 'form',
    component: RegisterFormComponent,
  },
  {
    path: 'reactive-form',
    component: ReactiveFormComponent,
  },
  {
    path: 'view-user/:id',
    component: ViewUserComponent,
  },
  {
    path: 'view-user/:id/class/:id',
    component: ViewUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
