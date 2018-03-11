import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { MovieService } from './movie.service';
import { Movie } from './movie.model';
import { Genre } from '../genres/genre.model';
import { switchMap } from 'rxjs/operators';

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
    private route: ActivatedRoute
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
}
