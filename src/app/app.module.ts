import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { CarModelsComponent } from './main/car-models/car-models.component';
import { DetailsComponent } from './main/details/details.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { FormsModule } from '@angular/forms';
import { SideBarComponent } from './shared/side-bar/side-bar.component';

@NgModule({
  exports: [
    MatSliderModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule
  ],
  declarations: [],
})
export class MaterialModule {};

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    CarModelsComponent,
    NavBarComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
