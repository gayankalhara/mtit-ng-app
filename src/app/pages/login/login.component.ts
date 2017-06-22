import {Component, ViewContainerRef} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {ToastsManager} from 'ng2-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class Login {

  public form: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;
  public submitted: boolean = false;

  constructor(private auth: AuthService,
              public toastr: ToastsManager,
              vcr: ViewContainerRef,
              private router: Router,
              fb: FormBuilder) {

    this.toastr.setRootViewContainerRef(vcr);

    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  login() {
    this.auth.login(this.form.value).subscribe(
      res => this.router.navigate(['/pages/dashboard']),
      error => this.toastr.error('Invalid Email or Password', 'Error!'),
    );
  }
}
