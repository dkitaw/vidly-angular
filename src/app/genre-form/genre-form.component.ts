import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { GenreService } from '../genres/genre.service';
import { Genre } from '../genres/genre.model';

import 'rxjs/add/operator/catch';

@Component({
  selector: 'genre-form',
  templateUrl: './genre-form.component.html',
  styleUrls: ['./genre-form.component.css']
})
export class GenreFormComponent implements OnInit {

  @Input() genre: Genre = new Genre();

  errorMessage: string;

  constructor(
    private activeModal: NgbActiveModal,
    private genreService: GenreService
  ) { }

  ngOnInit() {
  }

  save() {
    this.genreService.saveGenre(this.genre)
    .subscribe(genre => 
            {
              this.errorMessage = null;
              this.genre = genre;
              this.activeModal.close(this.genre);
            }, error => {
              console.log(error);
              this.errorMessage = error.message;
            });
  }

  remove() {
    this.genreService.removeGenre(this.genre)
      .subscribe(genre => {
        this.errorMessage = null;
        this.genre = null;
        this.activeModal.close(null);
      }, error => {
        console.log(error);
        this.errorMessage = error.message;
      })
  }
}
