import { Component, ViewChild } from '@angular/core';
import { Lembrete } from 'src/app/interfaces/lembrete';
import { ErroMsgComponent } from 'src/app/compartilhado/erro-msg/erro-msg.component';
import { LembreteService } from 'src/app/services/lembrete.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-lembretes',
  templateUrl: './editar-lembretes.component.html',
  styleUrls: ['./editar-lembretes.component.scss']
})
export class EditarLembretesComponent  {

  public lembrete: Lembrete;

  @ViewChild(ErroMsgComponent, {static: true}) errorMsgComponent: ErroMsgComponent;

  constructor(
    private lembreteService: LembreteService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {
    this.getLembrete(this.activateRoute.snapshot.params.id);
   }

   getLembrete(id: number) {
    this.lembreteService.getListaLembrete(id)
    .subscribe((lembrete: Lembrete) => {
      this.lembrete = lembrete;
    }, () => {
      this.errorMsgComponent.setError('Falha ao buscar lembrete.');
    });
   }

   atualizaLembrete(lembrete: Lembrete) {
    this.lembreteService.atualizaLembrete(lembrete)
    .subscribe(
      () => {
        this.router.navigateByUrl('/');
      },
        () => {
          this.errorMsgComponent.setError('Falha ao atualizar lembrete');
      });
   }
}
