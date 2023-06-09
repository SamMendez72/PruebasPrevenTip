import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialsModule } from 'src/app/angular-materials/angular-materials.module';
import { OrderComponent } from './order/order.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';



@NgModule({
  declarations: [
    MainComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialsModule,
    SharedModule,
    NgxChartsModule
  ]
})
export class DashboardModule { }
