import { Component } from '@angular/core';

@Component({
    //O SELECTOR PODE SER USADO COMO ATRIBUTO CLASSE, ROTULO OU SELETOR
    selector: 'topo',
    templateUrl: './topo.component.html',
    styleUrls: ['./topo.component.sass']
})
export class TopoComponent {
    public titulo: string = 'Aprendendo Inglês';
}