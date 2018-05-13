import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'bootstrap-modal',
  templateUrl: './bootstrap-modal.component.html',
  styleUrls: ['./bootstrap-modal.component.css']
})
export class BootstrapModalComponent implements OnInit {

  @Input() title: string = "Title";

  constructor(
    private activeModal: NgbActiveModal,
  ) { }

  ngOnInit() {
  }

}
