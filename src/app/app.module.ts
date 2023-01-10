import { PrimeiroComponenteComponent } from './Primeiro-Componente/primeiro-componente.component';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { MultiplicaPorPipe } from './pipes/multiplica-por.pipe';
import { OperadoresComponent } from './operadores/operadores.component';
import { DividaPorPipe } from './pipes/divida-por.pipe';
import { SomaPorPipe } from './pipes/soma-por.pipe';
import { SubtraiaPorPipe } from './pipes/subtraia-por.pipe';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RenderizandoListasComponent } from './renderizando-listas/renderizando-listas.component';
import { ComponentePersonalizadoComponent } from './componente-personalizado/componente-personalizado.component';
import { ComponentePaiComponent } from './componente-pai/componente-pai.component';
import { ComponenteFilhoComponent } from './componente-filho/componente-filho.component';
import { ExemploService1Component } from './exemplo-service1/exemplo-service1.component';
import { ExemploService2Component } from './exemplo-service2/exemplo-service2.component';
import { CicloDeVidaComponent } from './ciclo-de-vida/ciclo-de-vida.component';
import { CicloDeVidaPaiComponent } from './ciclo-de-vida-pai/ciclo-de-vida-pai.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent,
    SegundoComponenteComponent,
    MultiplicaPorPipe,
    OperadoresComponent,
    DividaPorPipe,
    SomaPorPipe,
    SubtraiaPorPipe,
    TwoWayDataBindingComponent,
    RenderizandoListasComponent,
    ComponentePersonalizadoComponent,
    ComponentePaiComponent,
    ComponenteFilhoComponent,
    ExemploService1Component,
    ExemploService2Component,
    CicloDeVidaComponent,
    CicloDeVidaPaiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
