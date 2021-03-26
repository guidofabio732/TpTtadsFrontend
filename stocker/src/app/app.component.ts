import { Component } from '@angular/core';
import { TipoMaquinaServiceService } from "./tipo-maquina-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stocker';
  constructor(private api: TipoMaquinaServiceService) {}
  ngOnInit() {
    this.api.apiCall().subscribe((data)=>{
      console.warn("get api data",data)
      this.title = 'Guido Fa'
    })
  }
}
