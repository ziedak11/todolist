import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { DetailTaskComponent } from './detail-task/detail-task.component';
import { DeleteTaskComponent } from './delete-task/delete-task.component';
import { ListTaskComponent } from './list-task/list-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AuthGuard } from './authentication/auth.guard';
import { UserRegisterComponent } from './user-register/user-register.component';



const routes: Routes = [
  {path:'login',component:UserLoginComponent},
  {path:'home',component:HomeComponent, canActivate: [AuthGuard]},
  {path:'new',component:NewTaskComponent, canActivate: [AuthGuard]},
  {path:'detail/:indexTask',component:DetailTaskComponent, canActivate: [AuthGuard]},
  {path:'delete/:indexTask',component:DeleteTaskComponent, canActivate: [AuthGuard]},
  {path:'list',component:ListTaskComponent, canActivate: [AuthGuard]},
  {path:'edit/:indexTask',component:EditTaskComponent, canActivate: [AuthGuard]},
  {path:'',component:UserLoginComponent}, 
  {path:'register',component:UserRegisterComponent},
  {path: '**', redirectTo: ''} 
  ];
  
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
