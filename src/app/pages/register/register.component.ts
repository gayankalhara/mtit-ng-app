import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { EmailValidator, EqualPasswordsValidator } from '../../theme/validators';
import { ToastsManager } from 'ng2-toastr';
import { UserService } from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'register',
  templateUrl: './register.html',
  styleUrls: ['./register.scss'],
})
export class Register {

  public form: FormGroup;
  public name: AbstractControl;
  public email: AbstractControl;
  public password: AbstractControl;
  public repeatPassword: AbstractControl;
  public passwords: FormGroup;

  public submitted: boolean = false;

  constructor(private userService: UserService,
              public toastr: ToastsManager,
              vcr: ViewContainerRef,
              private router: Router,
              fb: FormBuilder) {

    this.toastr.setRootViewContainerRef(vcr);

    this.form = fb.group({
      'name': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'email': ['', Validators.compose([Validators.required, EmailValidator.validate])],
      'passwords': fb.group({
        'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        'repeatPassword': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      }, { validator: EqualPasswordsValidator.validate('password', 'repeatPassword') }),
    });

    this.name = this.form.controls['name'];
    this.email = this.form.controls['email'];
    this.passwords = <FormGroup> this.form.controls['passwords'];
    this.password = this.passwords.controls['password'];
    this.repeatPassword = this.passwords.controls['repeatPassword'];
  }

  register() {
    const user = {
      'name': this.name.value,
      'email': this.email.value,
      'password': this.password.value,
    };

    this.userService.register(user).subscribe(
      res => {
        this.toastr.success('You have successfully registered!', 'Welcome!');
        this.router.navigate(['/login']);
      },
      error => this.toastr.error('Email Already Exists!', 'Error!'),
    );
  }
}
