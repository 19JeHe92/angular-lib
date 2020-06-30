import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoModule } from '../../lib/src/todo.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoModule.forRoot({brand: 'Brand Name'}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
