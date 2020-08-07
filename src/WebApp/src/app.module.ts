import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';

// vendor dependencies
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// app
import { Config } from './common/index';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Kendo UI
import { GridModule } from '@progress/kendo-angular-grid';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { RippleModule } from '@progress/kendo-angular-ripple';

// Components
import { DashboardComponent } from './dashboard/dashboard.component';

import { MarkdownComponent } from './markdown/markdown.component';
import { ActiveIssuesComponent } from './charts/active-issues.component';
import { TypesDistributionComponent } from './charts/types-distribution.component';
import { IssueTypesComponent } from './charts/issue-types.component';
import { StatisticsComponent } from './charts/statistics.component';
import { LoadingComponent } from './shared/spinner.component';

import { GraficoPercentualComponent } from './charts/grafico-percentual.component';
import { GraficoAreaComponent } from './charts/grafico-area.component';
import { AmountConverterPipe } from './charts/pipe-teste'

// environment
import { environment } from '../environments/environment';


Config.PLATFORM_TARGET = Config.PLATFORMS.WEB;

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http as any, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [

        AppComponent,
        DashboardComponent,
        MarkdownComponent,
        ActiveIssuesComponent,
        TypesDistributionComponent,
        IssueTypesComponent,
        StatisticsComponent,
        LoadingComponent,
        GraficoPercentualComponent,
        GraficoAreaComponent,
        AmountConverterPipe
    ],
    imports: [
        AppRoutingModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
        BrowserModule,
        ChartsModule,
        GridModule,
        DialogModule,
        InputsModule,
        ButtonsModule,
        LayoutModule,
        BrowserAnimationsModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClientModule]
            }
        }),
        RippleModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
