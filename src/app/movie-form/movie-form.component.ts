import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movies/movie.model';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Observable } from 'rxjs/Observable';

import { MovieService } from '../movies/movie.service';
import { GenreService } from '../genres/genre.service';
import { Genre } from '../genres/genre.model';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {
  genres: Observable<Genre[]>;
  errorMessage: string = null;
  @Input() movie: Movie = new Movie();

  constructor(
    private movieService: MovieService,
    private genreService: GenreService,
    private activeModal: NgbActiveModal,
  ) { }

  ngOnInit() {
    this.genres = this.genreService.getGenres();
  }

  get title() {
    return (this.movie && this.movie._id) ? "Edit movie" : "Add movie";
  }

  clearError() {
    this.errorMessage = null;
  }

  save() {
    this.movieService.saveMovie(this.movie)
    .subscribe(movie => 
            {
              this.errorMessage = null;
              this.movie = movie;
              this.activeModal.close(this.movie);
            }, error => {
              console.log(error);
              this.errorMessage = error;
            });
  }

  remove() {
    this.movieService.removeMovie(this.movie._id)
      .subscribe(movie => {
        this.errorMessage = null;
        this.movie = null;
        this.activeModal.close(null);
      }, error => {
        console.log(error);
        this.errorMessage = error;
      })
  }
  
  compareGenre(g1: Genre, g2: Genre): boolean {
    return g1 && g2 ? g1._id === g2._id : g1 === g2;
  }
}
