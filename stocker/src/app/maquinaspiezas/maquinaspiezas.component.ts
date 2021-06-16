import { Component, OnInit } from '@angular/core';
import { TipoMaquina } from '../models/tipomaquina';
import { TipoMaquinaServiceService } from '../tipo-maquina-service.service';
import { TipoPieza } from '../models/tipopieza';
import { TipoPiezaServiceService } from '../tipo-pieza-service.service';

@Component({
  selector: 'app-maquinaspiezas',
  templateUrl: './maquinaspiezas.component.html',
  styleUrls: ['./maquinaspiezas.component.css']
})
export class MaquinaspiezasComponent implements OnInit {
  title = "Stocker";
  selectedTipoMaquina: TipoMaquina = new TipoMaquina();
  selectedTipoPieza: TipoPieza = new TipoPieza();
  maquinasArray: any = [];
  piezasArray: any = [];

  constructor(private tipoMaquinaService: TipoMaquinaServiceService,
     private tipoPiezaService: TipoPiezaServiceService) { }

  ngOnInit() {
    this.tipoMaquinaService.getTipoMaquina().subscribe(
      res => {
        this.maquinasArray = res
      },
      err => console.log(err)
    )
    this.tipoPiezaService.getTipoPieza().subscribe(
      res => {
        this.piezasArray = res
      },
      err => console.log(err)
    )
  }
  
  selectMaquina(tipoMaquina: TipoMaquina) {
    this.selectedTipoMaquina = tipoMaquina
  }
  selectPieza(tipoPieza: TipoPieza) {
    this.selectedTipoPieza = tipoPieza
  }
}
