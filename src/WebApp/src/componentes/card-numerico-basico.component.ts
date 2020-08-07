import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-card-numerico-basico',
    template: `
    <span class="comp-label">
    <div class="issues-count" style="font-size: 80px;">{{ valorPrincipal | number }}
    </div>
    <div class="issues-label" style="font-size: 18px;">{{titulo}}</div>
</span>
<p class="m-0 medium text-muted">
    {{subTitulo}}:
    {{valor}}
    {{unidadeMedida}}
</p>`
})


export class CardNumericoBasicoComponent {
    @Input() public valorPrincipal;
    @Input() public titulo;
    @Input() public subTitulo;
    @Input() public valor;
    @Input() public unidadeMedida;
}
