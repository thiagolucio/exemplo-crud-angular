import { Component } from '@angular/core';

@Component({
  selector: 'app-erro-msg',
  templateUrl: './erro-msg.component.html',
  styleUrls: ['./erro-msg.component.scss']
})

export class ErroMsgComponent {
  // como o metodo error sera usado pelo template (na producao) ele deve ser declarado como public
  public error: string;
  // depois de 5 segundos ele seta o valor de error como nulo e a mensagem de erro desaparece da tela
  setError(error: string, tempo: number = 5000) {
    this.error = error;
    setTimeout(() => {
      this.error = null; // esvazia error depois dos 5s
    }, tempo);
   }
  }
