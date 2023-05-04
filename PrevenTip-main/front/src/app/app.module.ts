import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './views/login/login.module';
import { DashboardModule } from './views/dashboard/dashboard.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialsModule } from './angular-materials/angular-materials.module';
import { SharedModule } from './shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgChartsModule } from 'ng2-charts'
import { ColorPickerModule } from 'ngx-color-picker';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DataComponent } from './views/data/data.component';
import { LinechartComponent } from './views/linechart/linechart.component';
import { GraficoComponent } from './views/grafico/grafico.component';
import { Vital1Component } from './views/reporte/vital1/vital1.component';
import { BarChartComponent } from './views/reporte/bar-chart/bar-chart.component';
import { TablaHistorialComponent } from './views/reporte/tabla-historial/tabla-historial.component';
import { TablaPruebaComponent } from './views/tabla-prueba/tabla-prueba.component';


@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    LinechartComponent,
    GraficoComponent,
    Vital1Component,
    BarChartComponent,
    TablaHistorialComponent,
    TablaPruebaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    DashboardModule,
    BrowserAnimationsModule,
    AngularMaterialsModule,
    SharedModule,
    NgxChartsModule,
    NgChartsModule,
    ColorPickerModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
