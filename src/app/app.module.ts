import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ErroMsgComponent } from './compartilhado/erro-msg/erro-msg.component';
import { ListaLembreteComponent } from './paginas/lista-lembrete/lista-lembrete.component';
import { FormLembreteComponent } from './compartilhado/form-lembrete/form-lembrete.component';
import { FormsModule } from '@angular/forms';
import { CriarLembreteComponent } from './paginas/criar-lembrete/criar-lembrete.component';

@NgModule({
  declarations: [
    AppComponent,
    ErroMsgComponent,
    ListaLembreteComponent,
    FormLembreteComponent,
    CriarLembreteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [ ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
