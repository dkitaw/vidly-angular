import { Component, OnInit } from '@angular/core';
import { Genre } from '../genres/genre.model';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  public genre: Genre = null;
  
  constructor() { }

  ngOnInit() {
  }

  selectGenre(genre) {
    this.genre = genre;
  }
}
