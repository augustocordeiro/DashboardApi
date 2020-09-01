import { NgModule, LOCALE_ID } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ServiceWorkerModule } from "@angular/service-worker";

// app
import { Config } from "./common/index";
import { AppRoutingModule } from "./app-routing.module";

// Kendo UI
import { GridModule, ExcelModule } from "@progress/kendo-angular-grid";
import { ChartsModule } from "@progress/kendo-angular-charts";
import { DialogModule } from "@progress/kendo-angular-dialog";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { LayoutModule } from "@progress/kendo-angular-layout";
import { RippleModule } from "@progress/kendo-angular-ripple";


// Components
import { DashboardComponent } from "./dashboard/dashboard.component";
import { GraficoPercentualComponent } from "./componentes/grafico-percentual.component";
import { CardPercentualComponent } from "./componentes/card-percentual.component";
import { CardPercentualTextoComponent } from "./componentes/card-percentual-texto.component";
import { CardNumericoBasicoComponent } from "./componentes/card-numerico-basico.component";
import { CardPercentual3LinhasComponent } from "./componentes/card-percentual-3linhas.component";


import { GraficoAreaComponent } from "./componentes/grafico-area.component";

// environment
import { environment } from "../environments/environment";
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

import { IntlModule } from '@progress/kendo-angular-intl';
import '@progress/kendo-angular-intl/locales/pt/all';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

Config.PLATFORM_TARGET = Config.PLATFORMS.WEB;

@NgModule({
    declarations: [
        DashboardComponent,
        GraficoPercentualComponent,
        GraficoAreaComponent,
        CardPercentualComponent,
        CardPercentualTextoComponent,
        CardNumericoBasicoComponent,
        CardPercentual3LinhasComponent
    ],
    imports: [
        AppRoutingModule,
        ServiceWorkerModule.register("ngsw-worker.js", { enabled: environment.production }),
        BrowserModule,
        ChartsModule,
        GridModule,
        ExcelModule,
        DialogModule,
        InputsModule,
        ButtonsModule,
        LayoutModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RippleModule,
        DropDownsModule,
        IntlModule,
    ],
    exports: [

    ],
    providers: [

        { provide: LOCALE_ID, useValue: 'pt' },

    ],
    bootstrap: [DashboardComponent]
})
export class AppModule {
}