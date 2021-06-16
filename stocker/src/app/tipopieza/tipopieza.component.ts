import { Component, OnInit } from '@angular/core';
import { TipoPieza } from '../models/tipopieza';
import { TipoPiezaServiceService } from '../tipo-pieza-service.service';

@Component({
  selector: 'app-tipopieza',
  templateUrl: './tipopieza.component.html',
  styleUrls: ['./tipopieza.component.css']
})
export class TipopiezaComponent implements OnInit {
  title = "Stocker";
  selectedTipoPieza: TipoPieza = new TipoPieza();

  addOrEdit() {
    if(this.selectedTipoPieza.id === 0) {
      this.tipoPiezaService.createTipoPieza(this.selectedTipoPieza).subscribe(
        res => {
          this.selectedTipoPieza.id = this.tiposPiezaArray.length+1;
          this.tiposPiezaArray.push(this.selectedTipoPieza);
          this.selectedTipoPieza = new TipoPieza();
        },
        err => console.log(err)
      )
  
    } else {
      this.tipoPiezaService.editTipoPieza(this.selectedTipoPieza).subscribe(
        res => {
          this.selectedTipoPieza = new TipoPieza();
        },
        err => console.log(err)
      )
    }
  }

  delete() {
    if(confirm('¿Estás seguro que deseas eliminar el elemento?')) {
      this.tipoPiezaService.deleteTipoPieza(this.selectedTipoPieza).subscribe(
        res => {
          this.tiposPiezaArray = this.tiposPiezaArray.filter(x => x != this.selectedTipoPieza);
          this.selectedTipoPieza = new TipoPieza();
        },
        err => console.log(err)
      )
    }
  }

  openForEdit(tipoMaquina: TipoPieza) {
    this.selectedTipoPieza = tipoMaquina
  }

  tiposPiezaArray: any = [];
  constructor(private tipoPiezaService: TipoPiezaServiceService) {}
  ngOnInit() {
    this.tipoPiezaService.getTipoPieza().subscribe(
      res => {
        this.tiposPiezaArray = res
      },
      err => console.log(err)
    )
  }
}
