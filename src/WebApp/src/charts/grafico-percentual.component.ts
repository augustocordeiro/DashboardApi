
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-grafico-percentual',
    template: `

    <kendo-chart [title]="{text: titulo}">
    <kendo-chart-axis-defaults>
        <kendo-chart-axis-defaults-labels format="P0"></kendo-chart-axis-defaults-labels>
    </kendo-chart-axis-defaults>
    <kendo-chart-value-axis>
        <kendo-chart-value-axis-item max="1"></kendo-chart-value-axis-item>
    </kendo-chart-value-axis>
    <kendo-chart-category-axis>
        <kendo-chart-category-axis-item
            [categories]="categorias"
            [title]="{ text: descricaoEixoX }"></kendo-chart-category-axis-item>
    </kendo-chart-category-axis>
    <kendo-chart-series>
        <kendo-chart-series-item
            *ngFor="let item of serie"
            [data]="item.dados"
            [name]="item.nome"
            field="valor"
            categoryField="categoria"
            [color]="item.cor"
            [type]="tipo">
            <kendo-chart-series-item-tooltip>
                <ng-template let-dataItem="dataItem">
                    {{item.nome}}
                    |
                    {{dataItem.valor | percent}}
                </ng-template>
            </kendo-chart-series-item-tooltip>
        </kendo-chart-series-item>
    </kendo-chart-series>
</kendo-chart>`
})

export class GraficoPercentualComponent {
    @Input() public titulo;
    @Input() public categorias;
    @Input() public descricaoEixoX;
    @Input() public serie;
    @Input() public tipo;
}
