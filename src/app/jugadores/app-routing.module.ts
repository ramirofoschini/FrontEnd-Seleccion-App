import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JugadoresComponent } from './jugadores.component';
import { FormJugadoresComponent } from './form-jugadores.component';

const routes: Routes = [{ path: '', redirectTo: '/jugadores', pathMatch: "full" },
{ path: 'jugadores', component: JugadoresComponent },
{ path: 'jugadores/form', component: FormJugadoresComponent },
{ path: 'jugadores/form:id', component: FormJugadoresComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
