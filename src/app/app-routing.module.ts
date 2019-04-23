import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { TodosComponent } from './components/todos/todos.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterGuardService } from './services/router-guard.service';
import { LogoutComponent } from './components/logout/logout.component';
import { NotLoggedGuardService } from './services/not-logged-guard.service';
import { TodoComponent } from './components/todo/todo.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent, canActivate: [NotLoggedGuardService]},
  {path: 'login', component: LoginComponent, canActivate: [NotLoggedGuardService]},
  {path: 'signup', component: SignupComponent, canActivate: [NotLoggedGuardService]},
  {path: 'todos', component: TodosComponent, canActivate: [RouterGuardService]},
  {path: 'logout', component: LogoutComponent, canActivate: [RouterGuardService]},
  {path: 'todos/:id', component: TodoComponent, canActivate: [RouterGuardService]},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
