import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { TipomaquinaComponent } from './tipomaquina/tipomaquina.component';
import { TipopiezaComponent } from './tipopieza/tipopieza.component';
import { MaquinaspiezasComponent } from './maquinaspiezas/maquinaspiezas.component';

const routes: Routes = [
  { path: '',   redirectTo: '/tipomaquina', pathMatch: 'full' },
  { path: 'userlist', component: ListaUsuariosComponent, canActivate: [AuthGuard] },
  { path: 'tipomaquina', component: TipomaquinaComponent, canActivate: [AuthGuard]},
  { path: 'tipopieza', component: TipopiezaComponent, canActivate: [AuthGuard]},
  { path: 'maquinaspiezas', component: MaquinaspiezasComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'resultados/:query', component: ResultadosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
