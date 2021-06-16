import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { TipoMaquina } from '../models/tipomaquina';
import { TipoMaquinaServiceService } from '../tipo-maquina-service.service';


@Component({
  selector: 'app-tipomaquina',
  templateUrl: './tipomaquina.component.html',
  styleUrls: ['./tipomaquina.component.css']
})
export class TipomaquinaComponent implements OnInit {
  title = "Stocker";
  selectedTipoMaquina: TipoMaquina = new TipoMaquina();

  addOrEdit() {
    if(this.selectedTipoMaquina.id === 0) {
      this.tipoMaquinaService.createTipoMaquina(this.selectedTipoMaquina).subscribe(
        res => {
          this.selectedTipoMaquina.id = this.tiposMaquinaArray.length+1;
          this.tiposMaquinaArray.push(this.selectedTipoMaquina);
          this.selectedTipoMaquina = new TipoMaquina();
        },
        err => console.log(err)
      )
  
    } else {
      this.tipoMaquinaService.editTipoMaquina(this.selectedTipoMaquina).subscribe(
        res => {
          this.selectedTipoMaquina = new TipoMaquina();
        },
        err => console.log(err)
      )
    }
  }

  delete() {
    if(confirm('¿Estás seguro que deseas eliminar el elemento?')) {
      this.tipoMaquinaService.deleteTipoMaquina(this.selectedTipoMaquina).subscribe(
        res => {
          this.tiposMaquinaArray = this.tiposMaquinaArray.filter(x => x != this.selectedTipoMaquina);
          this.selectedTipoMaquina = new TipoMaquina();
        },
        err => console.log(err)
      )
    }
  }

  openForEdit(tipoMaquina: TipoMaquina) {
    this.selectedTipoMaquina = tipoMaquina
  }

  tiposMaquinaArray: any = [];
  constructor(private tipoMaquinaService: TipoMaquinaServiceService) {}
  ngOnInit() {
    this.tipoMaquinaService.getTipoMaquina().subscribe(
      res => {
        this.tiposMaquinaArray = res
      },
      err => console.log(err)
    )
  }
}
