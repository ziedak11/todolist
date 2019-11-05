import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { DetailTaskComponent } from './detail-task/detail-task.component';
import { DeleteTaskComponent } from './delete-task/delete-task.component';
import { ListTaskComponent } from './list-task/list-task.component';
import { DataTablesModule } from 'angular-datatables';
import { TaskService } from 'src/app/services/task.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationService } from './authentication/authentication.service';
import { JwtInterceptorService } from './authentication/jwt-interceptor.service';
import { ErrorInterceptorService } from './authentication/error-interceptor.service';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { RegisterUserService } from './services/register-user.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NewTaskComponent,
    EditTaskComponent,
    DetailTaskComponent,
    DeleteTaskComponent,
    ListTaskComponent,
    UserLoginComponent,
    UserRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TaskService,AuthenticationService,RegisterUserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
