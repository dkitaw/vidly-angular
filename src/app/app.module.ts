import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './/app-routing.module';

import { AuthTokenInterceptor } from './auth/auth-token.interceptor';

import { GenresComponent } from './genres/genres.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NavbarComponent } from './navbar/navbar.component';

import { AuthService } from './auth/auth.service';
import { MovieService } from './movies/movie.service';
import { GenreService } from './genres/genre.service';
import { GenreFormComponent } from './genre-form/genre-form.component';
import { BootstrapModalComponent } from './bootstrap-modal/bootstrap-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    GenresComponent,
    MoviesComponent,
    MoviesListComponent,
    LoginFormComponent,
    NavbarComponent,
    GenreFormComponent,
    BootstrapModalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
  ],
  providers: [
    GenreService,
    MovieService,
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true },
  ],
  entryComponents: [
    LoginFormComponent,
    GenreFormComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
