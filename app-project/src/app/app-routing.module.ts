import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonagensComponent } from './personagens/personagens.component';
import { CriaturasComponent } from './criaturas/criaturas.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'personagens', component: PersonagensComponent},
  {path:'criaturas', component: CriaturasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
