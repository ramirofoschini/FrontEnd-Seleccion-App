import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Jugador } from './jugador';
import { JugadorService } from './jugador.service';

@Component({
  selector: 'app-form-jugadores',
  templateUrl: './form-jugadores.component.html',
  styleUrls: ['./form-jugadores.component.css']
})
export class FormJugadoresComponent implements OnInit {

  posicion = [
    { id: 1, select: false, name: "Arquero" },
    { id: 2, select: false, name: "Defensor" },
    { id: 3, select: false, name: "Volante" },
    { id: 4, select: true, name: "Delantero" }
  ]

  changedPosicion($event) {
    const name = $event.target.value;
    const isCheked = $event.target.checked;
    
    console.log(name, isCheked)
  }

  jugador: Jugador = new Jugador();


  titulo: String = "Registro de Jugador";


  constructor(private jugadorService: JugadorService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargar();
  }

  cargar(): void {
    this.activatedRoute.params.subscribe(
      jug => {
        let id = jug['id'];
        if (id) {
          this.jugadorService.get(id).subscribe(
            ju => this.jugador = ju
          );
        }
      }
    );

  }


  crearJugador(): void {
    console.log(this.jugador);
    this.jugadorService.crearJugador(this.jugador).subscribe(
      res => this.router.navigate(['/jugadores'])

    );

  }
  modificar(): void {
    this.jugadorService.modificar(this.jugador).subscribe(
      res => this.router.navigate(['/jugadores'])
    );
  }

}
