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



  jugador: Jugador = new Jugador();

  posicion: Array<any> = [
    { id: 1, select: false, name: "ARQUERO" },
    { id: 2, select: false, name: "DEFENSOR" },
    { id: 3, select: false, name: "MEDIOCAMPISTA" },
    { id: 4, select: false, name: "DELANTERO" }
  ]


  changedPosicion($event) {
    const name = $event.target.value;
    const isChecked = $event.target.checked;

    if (isChecked) {
      // Agregar la posición al arreglo de posiciones del jugador
      this.jugador.posicion.push(name);
    } else {
      // Remover la posición del arreglo de posiciones del jugador
      const index = this.jugador.posicion.indexOf(name);
      if (index !== -1) {
        this.jugador.posicion.splice(index, 1);
      }
    }

    console.log(this.jugador.posicion);

  }


  titulo: String = "Registro de Jugador";


  constructor(private jugadorService: JugadorService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargar();
  }
  setPosicionesSeleccionadas() {
    this.posicion.forEach(pos => {
      pos.select = this.jugador.posicion.includes(pos.name.toUpperCase());

    });
  }
  cargar(): void {
    this.activatedRoute.params.subscribe(
      jug => {
        let id = jug['id'];
        if (id) {
          this.jugadorService.get(id).subscribe(

            ju => {
              this.jugador = ju;
              this.setPosicionesSeleccionadas();
            }
          );
        }
      }
    );

  }

  crearJugador(): void {
    // Agregar las posiciones seleccionadas al array de posicion del objeto jugador

    for (let i = 0; i < this.posicion.length; i++) {
      if (this.posicion[i].select) {
        this.jugador.posicion.push(this.posicion[i].name);
      }
    }

    // Enviar el objeto jugador al backend

    this.jugadorService.crearJugador(this.jugador).subscribe(
      res => this.router.navigate(['/jugadores'])
    );
    console.log(this.jugador);
  }

  modificar(): void {
    this.jugadorService.modificar(this.jugador).subscribe(
      res => this.router.navigate(['/jugadores'])
    );
  }
  // modificar(): void {
  //   // Eliminar todas las posiciones del objeto jugador
  //   this.jugador.posicion = [];

  //   // Agregar las posiciones seleccionadas al objeto jugador
  //   for (let i = 0; i < this.posicion.length; i++) {
  //     if (this.posicion[i].select) {
  //       this.jugador.posicion.push(this.posicion[i].name);
  //     }
  //   }

  //   // Enviar el objeto jugador al backend
  //   this.jugadorService.modificar(this.jugador).subscribe(
  //     res => this.router.navigate(['/jugadores'])
  //   );
  // }



}
