import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WeatherComponent } from './weather/weather.component';
import { PipesComponent } from './pipes/pipes.component';
import { NestedComponent } from './nested/nested.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { TformComponent } from './tform/tform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RformComponent } from './rform/rform.component';
import { UserListComponent } from './user-list/user-list.component';
import { CrudComponent } from './crud/crud.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WeatherComponent,
    PipesComponent,
    NestedComponent,
    ChildAComponent,
    ChildBComponent,
    TformComponent,
    RformComponent,
    UserListComponent,
    CrudComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //Needed for Template Driven Forms
    ReactiveFormsModule, //Needed for Reactive Forms
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
