import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../auth/auth.service';

import { GenreService } from './genre.service';
import { Genre } from './genre.model';
import { GenreFormComponent } from '../genre-form/genre-form.component';

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
    private genreService: GenreService,
    private auth: AuthService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.getGenres();
    this.route.queryParams
      .subscribe((params) => {
          this.selectedGenreId = params.genreId;
    });
  }

  getGenres() {
    this.genres = this.genreService.getGenres();
  }

  onClick(genre) {
    this.selectedGenreId = genre ? genre._id : null;
    this.onSelectedGenre.emit(genre);
  }

  edit($event, genre) {
    $event.stopPropagation();
    $event.preventDefault();
    const modalRef = this.modalService.open(GenreFormComponent, { windowClass: "modal-dialog-centered"} )
    modalRef.componentInstance.genre = genre;
    modalRef.result.then(_ => this.getGenres()).catch(console.log);
  }

  add($event) {
    $event.stopPropagation();
    $event.preventDefault();
    const modalRef = this.modalService.open(GenreFormComponent, { windowClass: "modal-dialog-centered"} )
        .result.then(_ => this.getGenres()).catch(console.log);
  }
}
