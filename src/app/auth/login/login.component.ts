import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl, FormBuilder, ValidationErrors } from '@angular/forms';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  hide = true;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  getErrorMessage() {
    return this.loginForm.controls.email.hasError('required') ? 'You must enter a value' :
        this.loginForm.controls.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  onSubmit() {
    const user = new User(
      this.loginForm.value.email,
      this.loginForm.value.password,
      null,
      null,
      null
    );
    this.loginForm.disable();
    this.userService.login(user).subscribe(
      data => {},
      error => {
        this.loginForm.enable();
        this.loginForm.setErrors({error: error});
        this.loginForm.markAsPristine();
      });
  }

  onTest() {
    this.loginForm.setValue({
      email: 'frank@example.com',
      password: 'plainpassword'
    });
    this.loginForm.markAsDirty();   // not pristine (as if value entered)
  }

  onClear() {
    this.loginForm.reset();
  }

  onCancel() {
    this.router.navigate(['/']);
  }
}
