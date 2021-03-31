import { Component } from '@angular/core';
import { TipoMaquinaServiceService } from "./tipo-maquina-service.service";
import { TipoMaquina } from "./models/tipomaquina";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tiposMaquinaArray: TipoMaquina[] = [
  {id: 1, descp: "CP"},
  {id: 2, descp: "F220"},
  {id: 3, descp: "F300"},
  {id: 4, descp: "F330"},
  ];
}
