import { Component, OnInit } from "@angular/core";
import { Jugador } from "./jugador";
import { JugadorService } from "./jugador.service";

@Component({
    selector: 'app-jugadores',
    templateUrl: './jugadores.component.html'

})
export class JugadoresComponent implements OnInit {

    jugadores:Jugador[];
    


    constructor(private jugadorServicio: JugadorService) {

    }
    ngOnInit(): void {
        this.jugadorServicio.getAll().subscribe(
            ju => this.jugadores = ju
        );

    }
    borrar(jugador:Jugador):void{
        this.jugadorServicio.eliminar(jugador.id).subscribe(
            res=>this.jugadorServicio.getAll().subscribe(
                response=>this.jugadores=response
            )
        )
        
    }
}