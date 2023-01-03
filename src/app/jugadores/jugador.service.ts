import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Jugador } from './jugador';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  private url: string = "http://localhost:8080/jugadores";

  constructor(private http: HttpClient) { }

  // Metodo para obtener la lista de jugadores
  getAll(): Observable<Jugador[]> {
    return this.http.get<Jugador[]>(this.url);

  }

  // Metodo para crear un jugador
  crearJugador(jugador: Jugador): Observable<Jugador> {
    return this.http.post<Jugador>(this.url, jugador);
  }

  // Devuelve un jugador mediante su id
  get(id: number): Observable<Jugador> {
    return this.http.get<Jugador>(this.url + '/' + id);
  }

  // Actualizar un registro
  modificar(jugador: Jugador): Observable<Jugador> {
    return this.http.put<Jugador>(this.url, jugador)
  }

  // Eliminar un registro
  eliminar(id: number): Observable<Jugador> {
    return this.http.delete<Jugador>(this.url + '/' + id);
  }
}