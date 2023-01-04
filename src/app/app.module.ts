import { PrimeiroComponenteComponent } from './Primeiro-Componente/primeiro-componente.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { MultiplicaPorPipe } from './multiplica-por.pipe';
import { OperadoresComponent } from './operadores/operadores.component';
import { DividaPorPipe } from './divida-por.pipe';
import { SomaPorPipe } from './soma-por.pipe';
import { SubtraiaPorPipe } from './subtraia-por.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent,
    SegundoComponenteComponent,
    MultiplicaPorPipe,
    OperadoresComponent,
    DividaPorPipe,
    SomaPorPipe,
    SubtraiaPorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
