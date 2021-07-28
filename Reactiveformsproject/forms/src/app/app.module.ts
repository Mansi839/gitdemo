import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
i
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';

@NgModule({
  declarations: [
    AppComponent,
  
    ReactiveformsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ReactiveformsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
