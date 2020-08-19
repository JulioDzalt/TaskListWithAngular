import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TareaComponent } from './tarea/tarea.component';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';

@NgModule({
  declarations: [
    AppComponent,
    TareaComponent,
    ListaTareasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
