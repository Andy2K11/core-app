import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  hide = true;

  constructor(private fb: FormBuilder, private userService: UserService) { }

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

  populateTestData() {
    this.loginForm.setValue({
      email: 'frank@example.com',
      password: 'plainpassword'
    });
  }

  onSubmit() {
    const user = new User(
      this.loginForm.value.email,
      this.loginForm.value.password,
      null,
      null
    );
    this.userService.login(user);

    this.loginForm.reset();
  }

  onCancel() {
    this.loginForm.reset();
  }
}
