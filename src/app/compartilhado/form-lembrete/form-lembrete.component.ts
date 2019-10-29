import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Lembrete } from 'src/app/interfaces/lembrete';

@Component({
  selector: 'app-form-lembrete',
  templateUrl: './form-lembrete.component.html',
  styleUrls: ['./form-lembrete.component.scss']
})
export class FormLembreteComponent {
  // @Input() lembrete: Lembrete = <Lembrete> {};
  @Input() lembrete: Lembrete = {} as Lembrete;
  @Output() outputLembrete: EventEmitter<Lembrete> = new EventEmitter();

  onSubmit() {
    this.outputLembrete.emit(this.lembrete);
  }

}
