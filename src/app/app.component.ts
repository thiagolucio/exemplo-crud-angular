import { Component, ViewChild, OnInit } from '@angular/core';
import { ErroMsgComponent } from './compartilhado/erro-msg/erro-msg.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  titulo = 'Modelo de Exemplo de CRUD com Angular';
  @ViewChild(ErroMsgComponent, {static: true}) errorMsgComponent: ErroMsgComponent;

  ngOnInit() {
    // this.errorMsgComponent.setError('Esta é uma mensagem de erro');
  }

}
