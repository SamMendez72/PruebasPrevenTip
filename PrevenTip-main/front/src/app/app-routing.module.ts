import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './views/login/auth/auth.component';
import { MainComponent } from './views/dashboard/main/main.component';
import { DataComponent } from './views/data/data.component';
import { LinechartComponent } from './views/linechart/linechart.component';
import { GraficoComponent } from './views/grafico/grafico.component';
import { Vital1Component } from './views/reporte/vital1/vital1.component';
import { BarChartComponent } from './views/reporte/bar-chart/bar-chart.component';

const routes: Routes = [
  {path: '', redirectTo:'/login', pathMatch:'full'},
  {path: 'login', component: AuthComponent},
  //{path: 'dashboard', component: MainComponent}
  //{path: 'dashboard', component: DataComponent}
  //{path: 'dashboard', component: GraficoComponent}
  {path: 'dashboard', component: Vital1Component},
  {path: 'bar', component: BarChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
