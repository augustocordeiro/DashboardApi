import { Component, Input } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';

@Component({
    selector: 'app-grafico-area',
    template: `
    <kendo-chart [title]="{text: titulo}">
    <kendo-chart-axis-defaults>
        <kendo-chart-axis-defaults-labels format="N0"></kendo-chart-axis-defaults-labels>
    </kendo-chart-axis-defaults>
    <kendo-chart-category-axis>
        <kendo-chart-category-axis-item
            [categories]="categorias"
            [title]="{ text: descricaoEixoX }"></kendo-chart-category-axis-item>
    </kendo-chart-category-axis>
    <kendo-chart-series>
        <kendo-chart-series-item
            *ngFor="let item of serie"
            [stack]="true"
            [data]="item.dados"
            [name]="item.nome"
            field="valor"
            categoryField="categoria"
            type="area">
            <kendo-chart-series-item-tooltip>
                <ng-template let-dataItem="dataItem">
                    {{item.nome}}
                    |
                    {{dataItem.valor | number:'':'es'}}
                </ng-template>
            </kendo-chart-series-item-tooltip>
        </kendo-chart-series-item>
    </kendo-chart-series>
</kendo-chart>`
})

export class GraficoAreaComponent {
    @Input() public titulo;
    @Input() public categorias;
    @Input() public descricaoEixoX;
    @Input() public serie;


    ngOnInit() {
        registerLocaleData( es );
      }
    
}