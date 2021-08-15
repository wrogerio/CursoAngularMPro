import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { MainLifecicleComponent } from './main-lifecicle/main-lifecicle.component';
import { LifecycleChildComponent } from './main-lifecicle/lifecycle-child/lifecycle-child.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLifecicleComponent,
    LifecycleChildComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
