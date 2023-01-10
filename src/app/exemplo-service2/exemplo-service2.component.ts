import { LoggerService } from './../logger.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo-service2',
  templateUrl: './exemplo-service2.component.html',
  styleUrls: ['./exemplo-service2.component.css']
})
export class ExemploService2Component {
  descricao: string= "";

  constructor(public logger: LoggerService) {}

  adicionarDescricao(){
    this.logger.logar(`A descrição: "${this.descricao}", foi salvo na memória.`);
  }

  mostrarTodosLogs(){
    this.logger.mostrarTodosLogs();
  }
}
