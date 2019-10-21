import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './layouts/home_layout.component';
import { LoginLayoutComponent } from './layouts/login-layout.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthorizatedGuard } from './core/guards/authorizated.guard';
const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  {

    path: '',
    component: HomeLayoutComponent,
    canActivate: [AuthorizatedGuard],
    children: [
      //{ path: '', redirectTo: '/home', pathMatch: 'full' },
      {
        path: 'home',
        component: HomeComponent,
      },

    ]
  },

  //{ path: 'agendamiento',  component: AgendamientoComponent, canActivate: [ AuthorizatedGuard ] },
  //{ path: 'historial-citas',  component: HistorialCitasComponent, canActivate: [ AuthorizatedGuard ] },
 // { path: 'disponibilidad', component: DisponibilidadComponent, canActivate: [AuthorizatedGuard] },
  //{ path: 'cancelar', component: CancelarCitasComponent, canActivate: [AuthorizatedGuard] },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  },

  { path: '**', redirectTo: '/home' },

];

export const Routing = RouterModule.forRoot(appRoutes, {onSameUrlNavigation:'reload'});
