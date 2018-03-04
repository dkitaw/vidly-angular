import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';

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
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.movies = this.route
        .queryParams.map(p => p.genreId)
        .switchMap((genreId) => this.movieService.getMovies(genreId));
  }

  onSelect(movie) {
    this.selectedMovie = movie;
  }
}
