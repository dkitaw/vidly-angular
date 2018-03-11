import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../auth/auth.service';
import { AuthParams } from '../auth/auth-params.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  errorMessage: string;

  constructor(
    private activeModal: NgbActiveModal,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  submit(form) {
    const params = form.value;
    this.authService.login(params).subscribe(message => {
      if (message) {
        this.errorMessage = message;
      } else {
        this.errorMessage = null;
        this.activeModal.close();
      }
    });
  }
}
