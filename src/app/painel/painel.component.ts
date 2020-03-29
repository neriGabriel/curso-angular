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
  public resposta: string = "";

  public rodada: number = 0;
  public rodadaFrase: Frase;

  public progresso: number = 0;

  public tentativas: number = 3;

  
  constructor() { 
    this.atualizaRodada();
  }

  ngOnInit() {}

  //$event no html = recupera o estado do html no DOM.
  public atualizaResposta(valor: Event) : void {
    this.resposta = (<HTMLInputElement>valor.target).value;
  }

  public verificaResposta() : void {
    //trocar pergunta da rodada
    if(this.rodadaFrase.frasePt === this.resposta ) {
        this.progresso = this.progresso + (100 / this.frases.length);
        this.rodada++;

        if(this.rodada >= this.frases.length) {
          this.rodada = 0;
        }

        this.atualizaRodada();
        
    } else {
        this.tentativas--;

        if(this.tentativas == -1){
          alert('Você perdeu todas as tentativas!');
          this.rodada = 0;
          this.rodadaFrase = this.frases[this.rodada];
          this.tentativas = 3;
        }
          
    }
    
  }

  public atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = '';
  }

}
