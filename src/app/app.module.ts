import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";


import { AppComponent } from './app.component';

import { AppRoutingModule } from './/app-routing.module';

import { GenresComponent } from "./genres/genres.component";
import { MoviesComponent } from "./movies/movies.component";
import { MoviesListComponent } from "./movies-list/movies-list.component";

import { GenreService } from "./genres/genre.service";
import { MovieService } from "./movies/movie.service";



@NgModule({
  declarations: [
    AppComponent,
    GenresComponent,
    MoviesComponent,
    MoviesListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    GenreService,
    MovieService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
