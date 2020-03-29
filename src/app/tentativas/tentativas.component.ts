import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Coracao } from '../../shared/coracao.model';  

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.sass']
})
export class TentativasComponent implements OnInit, OnChanges {

  //RECEBENDO UMA 'VARIAVEL' DE OUTRO COMPONENTE PAI
  @Input() public tentativas: number;

  public coracoes: Array<Coracao> = [
      new Coracao(true),
      new Coracao(true),
      new Coracao(true)
  ];
  
  constructor() {  }

  ngOnInit() {}

  //SEMPRE QUE HOUVER UMA ALTERAÇÃO NO COMPONENTE PAI FAZ O COMPONENTE FILHO CHECAR ESSA ALTERAÇÃO, OU
  //SEMPRE QUE HOUVER UMA ALTERAÇÃO EM UMA VARIAVEL ENVIADA DO COMPONENTE PAI CHECA ESSA ALTERAÇÃO NO
  //COMPONENTE FILHO
  ngOnChanges() { 
    if(this.tentativas != this.coracoes.length) {
      let indice = this.coracoes.length - this.tentativas;

      this.coracoes[indice - 1].cheio = false;
    }

  }

}
