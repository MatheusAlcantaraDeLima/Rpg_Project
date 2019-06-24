import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonagensComponent } from './personagens/personagens.component';
import { CriaturasComponent } from './criaturas/criaturas.component';
import { SobrenosComponent } from './sobrenos/sobrenos.component';
import { ContatosComponent } from './contatos/contatos.component';
import { JogarComponent } from './jogar/jogar.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'personagens', component: PersonagensComponent},
  {path:'criaturas', component: CriaturasComponent},
  {path:'sobrenos', component: SobrenosComponent},
  {path:'contatos', component: ContatosComponent},
  {path:'jogar', component: JogarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
