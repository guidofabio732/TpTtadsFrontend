import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TipomaquinaComponent } from './tipomaquina/tipomaquina.component';
import { TipopiezaComponent } from './tipopieza/tipopieza.component';

const routes: Routes = [
  { path: 'userlist', component: ListaUsuariosComponent, canActivate: [AuthGuard] },
  { path: 'tipomaquina', component: TipomaquinaComponent, canActivate: [AuthGuard]},
  { path: 'tipopieza', component: TipopiezaComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
