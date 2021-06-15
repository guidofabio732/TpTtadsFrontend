import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { JwtInterceptor } from './jwt.interceptor';
import { TipomaquinaComponent } from './tipomaquina/tipomaquina.component';
import { RegisterComponent } from './register/register.component';
import { TipopiezaComponent } from './tipopieza/tipopieza.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { MaquinaspiezasComponent } from './maquinaspiezas/maquinaspiezas.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListaUsuariosComponent,
    TipomaquinaComponent,
    RegisterComponent,
    TipopiezaComponent,
    NavegacionComponent,
    MaquinaspiezasComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
