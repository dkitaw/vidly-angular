import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { GenreService } from './genre.service';
import { Genre } from './genre.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  @Output() onSelectedGenre = new EventEmitter<Genre>();

  private genres: Observable<Genre[]>;
  private selectedGenreId: String;

  constructor(
    private route: ActivatedRoute,
    private genreService: GenreService
  ) { }

  ngOnInit() {
    this.genres = this.genreService.getGenres();
    this.route.queryParams.map(p => p.genreId).subscribe((genreId) => {
      this.selectedGenreId = genreId;
    });
  }

  onClick(genre) {
    this.selectedGenreId = genre ? genre.id : null;
    this.onSelectedGenre.emit(genre);
  }

}
