import { LoggerService } from './../logger.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo-service1',
  templateUrl: './exemplo-service1.component.html',
  styleUrls: ['./exemplo-service1.component.css']
})
export class ExemploService1Component {

  nome: string = "";

  constructor(private log: LoggerService){}

  adicionarNome(){
    this.log.logar(`O nome ${this.nome} foi salvo na memória.`);
  }
}
