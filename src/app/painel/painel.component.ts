import { Component, OnInit } from '@angular/core';
import { Frase } from '../../shared/frase.model'; 
import { FRASES } from './frase.mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.sass']
})
export class PainelComponent implements OnInit {

  public frases: Array<Frase> = FRASES;
  public instrucao: string = "Traduza a frase: ";
  public resposta: string;

  public rodada: number = 0;
  public rodadaFrase: Frase;

  constructor() { 
    this.rodadaFrase = this.frases[this.rodada];
  }

  ngOnInit() {}

  //$event no html = recupera o estado do html no DOM.
  public atualizaResposta(valor: Event) : void {
    this.resposta = (<HTMLInputElement>valor.target).value;
    //console.log( this.resposta);
  }

  public verificaResposta() : void {
    console.log('Verificar resposta', this.resposta);
  }

}
