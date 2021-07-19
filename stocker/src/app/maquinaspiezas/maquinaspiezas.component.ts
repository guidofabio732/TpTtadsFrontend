import { Component, OnInit } from '@angular/core';
import { TipoMaquina } from '../models/tipomaquina';
import { TipoMaquinaServiceService } from '../tipo-maquina-service.service';
import { TipoPieza } from '../models/tipopieza';
import { TipoPiezaServiceService } from '../tipo-pieza-service.service';
import { MaquinasPiezasService } from '../maquinas-piezas.service';
import { MaquinaPieza } from '../models/maquinaPieza';

@Component({
  selector: 'app-maquinaspiezas',
  templateUrl: './maquinaspiezas.component.html',
  styleUrls: ['./maquinaspiezas.component.css']
})
export class MaquinaspiezasComponent implements OnInit {

  title = "Stocker";
  selectedTipoMaquina: TipoMaquina = new TipoMaquina();
  selectedTipoPieza: TipoPieza = new TipoPieza();
  cantidad: number;

  maquinasArray: any = [];
  piezasArray: any = [];
  maquinaPieza: MaquinaPieza
  maquinasPiezas: MaquinaPieza[]

  constructor(
    private tipoMaquinaService: TipoMaquinaServiceService,
    private tipoPiezaService: TipoPiezaServiceService,
    private maquinasPiezasService: MaquinasPiezasService
  ) { }

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

    this.getMaquinasPiezas();
  }

  getMaquinasPiezas() {
    this.maquinasPiezasService.getMaquinasPiezas().subscribe(
      (res: MaquinaPieza[]) => this.maquinasPiezas = res ,
      err => console.log(err)
    )
  }

  agregarMaquinaPieza() {
    this.maquinaPieza = new MaquinaPieza()

    this.maquinaPieza.id_maquina = this.selectedTipoMaquina.id
    this.maquinaPieza.id_pieza = this.selectedTipoPieza.id
    this.maquinaPieza.cant = this.cantidad

    console.log(this.maquinaPieza);

    this.maquinasPiezasService.agregarMaquinaPieza(this.maquinaPieza)
      .subscribe(
        res => { console.log(res) },
        err => console.log(err)
      );

    this.maquinasPiezas.push(this.maquinaPieza);

    // Limpieza de los campos del form

    this.selectedTipoMaquina.id = 0;
    this.selectedTipoMaquina.descp = '';
    this.selectedTipoPieza.descp = '';
    this.selectedTipoPieza.id = 0;
    this.cantidad = null;
  }

  selectMaquina(tipoMaquina: TipoMaquina) {
    this.selectedTipoMaquina = tipoMaquina
  }
  selectPieza(tipoPieza: TipoPieza) {
    this.selectedTipoPieza = tipoPieza
  }
}
