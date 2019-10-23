import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, NgModel } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { LoaderInterceptorProvider } from './core/helper/loader.interceptor';
import { LoaderService } from './core/services/loader.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatInputModule, MatButtonModule, MatCardModule } from '@angular/material';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { AlertComponent } from './core/vista/alert/alert.component';
import { LoginLayoutComponent } from './layouts/login-layout.component';
import { HomeLayoutComponent } from './layouts/home_layout.component';
import { Routing } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './core/vista/loader/loader.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { ActualizaUsuarioComponent } from './actualiza-usuario/actualiza-usuario.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    AlertComponent,
    LoginLayoutComponent,
    HomeLayoutComponent,
    LoaderComponent,
    ListaUsuarioComponent,
    CrearUsuarioComponent,
    ActualizaUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    Routing,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    CoreModule,
    ReactiveFormsModule,
    NgbModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    HttpClientModule
  ],

  providers: [LoaderService, LoaderInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
