import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { StrengthZoneComponent } from './input/strength-zone/strength-zone.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    StrengthZoneComponent
  ],
  imports: [
    BrowserModule, FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
