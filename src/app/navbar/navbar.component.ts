import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginFormComponent } from '../login-form/login-form.component';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items = [
    { title: 'Movies', link: ['movies'] }
  ];

  constructor(
    private modalService: NgbModal,
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

  showLoginForm() {
    const modalRef = this.modalService.open(LoginFormComponent, { windowClass: "modal-dialog-centered"} );
  }

  logout() {
    this.auth.removeAuthToken();
  }
}
