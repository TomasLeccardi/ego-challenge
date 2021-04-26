import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarModelsComponent } from './main/car-models/car-models.component';
import { DetailsComponent } from './main/details/details.component';

const routes: Routes = [
  { path: '', pathMatch: 'full' , component: CarModelsComponent },
  { path: 'details/:modelId', pathMatch: 'full' , component: DetailsComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
