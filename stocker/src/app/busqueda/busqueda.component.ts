import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  
  searchQuery: string;

  constructor(private router: Router) { }


  ngOnInit(): void {
  }

  buscar() {
    if(!this.searchQuery || this.searchQuery.trim() === '') return;

    this.router.navigate([`/resultados/${this.searchQuery.trim()}`])
  }

}
