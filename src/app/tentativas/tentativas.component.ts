import { Component, OnInit } from '@angular/core';
import { Coracao } from '../../shared/coracao.model';  

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.sass']
})
export class TentativasComponent implements OnInit {

  public coracoes: Array<Coracao> = [
      new Coracao(true),
      new Coracao(true),
      new Coracao(true)
  ];
  
  constructor() { 
    console.log(this.coracoes);
  }

  ngOnInit() {
  }

}
