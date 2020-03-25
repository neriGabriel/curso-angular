import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.sass']
})
export class TentativasComponent implements OnInit {

  public url_coracao_vazio: string = "/assets/coracao_vazio.png";
  public url_coracao_cheio: string = "/assets/coracao_cheio.png";
  constructor() { }

  ngOnInit() {
  }

}
