import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JugadoresComponent } from './jugadores.component';
import { FormJugadoresComponent } from './form-jugadores.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', redirectTo: '/jugadores', pathMatch: 'full' },
  { path: 'jugadores', component: JugadoresComponent },
  { path: 'jugadores/form', component: FormJugadoresComponent },
  { path: 'jugadores/form/:id', component: FormJugadoresComponent },

];

@NgModule({
  declarations: [
    AppComponent, JugadoresComponent, FormJugadoresComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
