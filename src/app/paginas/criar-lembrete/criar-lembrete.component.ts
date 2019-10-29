import { Component, ViewChild } from '@angular/core';
import { LembreteService } from 'src/app/services/lembrete.service';
import { Router } from '@angular/router';
import { ErroMsgComponent } from 'src/app/compartilhado/erro-msg/erro-msg.component';
import { Lembrete } from 'src/app/interfaces/lembrete';

@Component({
  selector: 'app-criar-lembrete',
  templateUrl: './criar-lembrete.component.html',
  styleUrls: ['./criar-lembrete.component.scss']
})
export class CriarLembreteComponent {

  @ViewChild(ErroMsgComponent, {static: true}) errorMsgComponent: ErroMsgComponent;

  constructor(
    private lembreteService: LembreteService,
    private router: Router
  ) { }

  addLembrete(lembrete: Lembrete) {
    this.lembreteService.addLembrete(lembrete)
    .subscribe(
      // se retornar com sucesso
      () => {
        this.router.navigateByUrl('/');
      },
      // se retornar alguma coisa errada
      () => {
        this.errorMsgComponent.setError('Falha ao adicionar lembrete.');
    });
  }

}
