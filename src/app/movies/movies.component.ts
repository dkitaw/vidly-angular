import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators';

import { AuthService } from '../auth/auth.service';
import { MovieFormComponent } from '../movie-form/movie-form.component';
import { MovieService } from './movie.service';
import { Movie } from './movie.model';
import { Genre } from '../genres/genre.model';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  private movies: Observable<Movie[]>;
  private selectedMovie: Movie;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private auth: AuthService,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.movies = this.route.queryParams
      .pipe(
        switchMap(p => this.movieService.getMovies(p.genreId))
      );
  }

  onSelect(movie) {
    this.selectedMovie = movie;
  }

  edit(movie) {
    const modalRef = this.modalService.open(MovieFormComponent, { windowClass: "modal-dialog-centered"} );
    modalRef.componentInstance.movie = movie;
    modalRef.result.then(_ => this.getMovies()).catch(console.log);
  }

  add() {
    const modalRef = this.modalService.open(MovieFormComponent, { windowClass: "modal-dialog-centered"} )
    .result.then(_ => this.getMovies()).catch(console.log);
  }
}
