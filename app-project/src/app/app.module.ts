import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PersonagensComponent } from './personagens/personagens.component';
import { CriaturasComponent } from './criaturas/criaturas.component';
import { SobrenosComponent } from './sobrenos/sobrenos.component';
import { ContatosComponent } from './contatos/contatos.component';
import { JogarComponent } from './jogar/jogar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonagensComponent,
    CriaturasComponent,
    SobrenosComponent,
    ContatosComponent,
    JogarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
