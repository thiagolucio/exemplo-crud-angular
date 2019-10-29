import { Component, OnInit, ViewChild } from '@angular/core';
import { Lembrete } from 'src/app/interfaces/lembrete';
import { ErroMsgComponent } from 'src/app/compartilhado/erro-msg/erro-msg.component';
import { LembreteService } from 'src/app/services/lembrete.service';


@Component({
  selector: 'app-lista-lembrete',
  templateUrl: './lista-lembrete.component.html',
  styleUrls: ['./lista-lembrete.component.scss']
})
export class ListaLembreteComponent implements OnInit {

  public lembretes: Lembrete[];

  @ViewChild(ErroMsgComponent, { static: true }) errorMsgComponent: ErroMsgComponent;

  constructor(private lembreteService: LembreteService) { }

  ngOnInit() {
    this.getListaLembretes();
  }

  // trazendo os dados com getter
  getListaLembretes() {
    this.lembreteService.getListaLembretes()
      .subscribe((lembretes: Lembrete[]) => {
        this.lembretes = lembretes;
      }, () => {
        this.errorMsgComponent.setError('Falha ao buscar lembretes');
      });
  }

  // deletando lembrete
  deletaLembrete(id: number) {
    this.lembreteService.deletaLembrete(id)
    .subscribe(() => {
      this.getListaLembretes();
    }, () => {this.errorMsgComponent.setError('Falha ao deletar lembrete.');
    });
  }

  // verificar se existem lembretes na lista
  existemLembretes(): boolean {
    return this.lembretes && this.lembretes.length > 0;
  }
}
