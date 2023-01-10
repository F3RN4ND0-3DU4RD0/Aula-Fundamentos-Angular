import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
name:string = "Seu Lunga";
dataNascimento:string = "1927-08-18";
dataFalecimento: string = "2014-11-22"

mostrarDataNascimento(){
  alert(`A data de nascimento é ${this.dataNascimento}`);
}

mostrarDataFalecimento(){
  alert(`A data de falecimento é ${this.dataFalecimento}`);
}
}
