import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public title: string = 'hello-world';

  public jogoEmAndamento: boolean = true;
  public encerramento: string = '';

  public encerrarJogo(tipo : string) : void {
      this.jogoEmAndamento = false;
      this.encerramento = tipo;
  }

  public reiniciarJogo() : void {
    this.jogoEmAndamento = true;
    this.encerramento = '';
  }
}
