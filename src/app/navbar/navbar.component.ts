import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginFormComponent } from '../login-form/login-form.component';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items = [
    { title: 'Movies', link: ['movies'] }
  ];

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  showLoginForm() {
    const modalRef = this.modalService.open(LoginFormComponent, { windowClass: "modal-dialog-centered"} );
  }
}
