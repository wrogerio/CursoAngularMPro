import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyFirstComponent } from './myfirst.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './second/third/third.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    SecondComponent,
    ThirdComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
