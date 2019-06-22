import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonagensComponent } from './personagens/personagens.component';
import { CriaturasComponent } from './criaturas/criaturas.component';
import { SobrenosComponent } from './sobrenos/sobrenos.component';
import { ContatosComponent } from './contatos/contatos.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'personagens', component: PersonagensComponent},
  {path:'criaturas', component: CriaturasComponent},
  {path:'sobrenos', component: SobrenosComponent},
  {path:'contatos', component: ContatosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
