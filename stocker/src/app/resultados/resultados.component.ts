import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusquedaService } from '../busqueda.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  query: string;
  maquinas: any
  piezas: any
  
  constructor(private route: ActivatedRoute, private busquedaService: BusquedaService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      this.query = param.get('query')
      this.buscarMaquinas()
      this.buscarPiezas()
    });
  }

  buscarMaquinas() {
    this.busquedaService.buscarMaquinas(this.query)
      .subscribe({
        next: maquinas => this.maquinas = maquinas,
        error: error => console.log(error)
      })
  }

  buscarPiezas() {
    this.busquedaService.buscarPiezas(this.query)
      .subscribe({
        next: piezas => this.piezas = piezas,
        error: error => console.log(error)
      })
  }

}
