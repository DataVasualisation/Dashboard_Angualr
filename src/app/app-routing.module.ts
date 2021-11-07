import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApexchartComponent } from './apexchart/apexchart.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [

  { path:'ApexChart',component:ApexchartComponent },
  {path:'test',component:TestComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
