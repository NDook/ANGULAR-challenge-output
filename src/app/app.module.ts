import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateOnomatopiaComponentComponent } from './create-onomatopia-component/create-onomatopia-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateOnomatopiaComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
