import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
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

  //CRIO ESSA VARIAVEL PARA MANDAR PRO COMPONENTE FILHO NÃO ESQUECENDO DA DIRETIVA NO HTML
  public tentativas: number = 3;

  //EMITIR UM EVENTO PRO COMPONENTE PAI
  //COM UM OUTPUT PARA EMITIR/DECORAR PARA O PAI COM O TIPO STRING (PODE SER QLQR TIPO)
  @Output() public encerrarJogo : EventEmitter<string> = new EventEmitter();

  
  constructor() { 
    this.atualizaRodada();
  }

  ngOnInit() {}

  ngOnDestroy() {}

  //$event no html = recupera o estado do html no DOM.
  public atualizaResposta(valor: Event) : void {
    this.resposta = (<HTMLInputElement>valor.target).value;
  }

  public verificaResposta() : void {
    //trocar pergunta da rodada
    if(this.rodadaFrase.frasePt === this.resposta ) {
        this.progresso = this.progresso + (100 / this.frases.length);
        this.rodada++;

        if(this.rodada == this.frases.length) {
          //EMITO PARA O COMPONENTE PAI
          this.rodada = 0;
          this.encerrarJogo.emit('vitoria');
        }

        this.atualizaRodada();
        
    } else {
        this.tentativas--;

        //SE ACABOU O JOGO
        if(this.tentativas == -1){
          this.rodada = 0;
          this.rodadaFrase = this.frases[this.rodada];
          this.tentativas = 3;
          this.encerrarJogo.emit('derrota');
        }
          
    }
    
  }

  public atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = '';
  }

}
