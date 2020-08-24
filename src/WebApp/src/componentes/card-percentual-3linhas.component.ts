import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-card-percentual-3linhas',
    template: `
    <span class="comp-label">
    <div class="issues-count" style="font-size: 80px;">{{ valorPercentual | percent:'2.0-0' }}</div>
    <div class="issues-label" style="font-size: 18px;">{{titulo}}</div>
</span>
<p class="m-0 medium text-muted">
    {{subTitulo1}}:
    {{valor1 | number}}
</p>
<p class="m-0 medium text-muted">
    <span>{{subTitulo2}}:
    {{valor2 | number}}</span>&nbsp;&nbsp;|&nbsp;&nbsp;
    <span>{{subTitulo3}}:
    {{valor3 | number}}</span>
</p>`
})

export class CardPercentual3LinhasComponent {
    @Input() public valorPercentual;
    @Input() public titulo;
    @Input() public subTitulo1;
    @Input() public subTitulo2;
    @Input() public subTitulo3;
    @Input() public valor1;
    @Input() public valor2;    
    @Input() public valor3; 
}