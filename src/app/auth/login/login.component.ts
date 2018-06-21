import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  hide = true;

  constructor(private fb: FormBuilder) { }

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
    // const user = new User(
    //     form.value.email,
    //     form.value.password,
    //     null
    // );
    // this.userService.login(user)
    //     .subscribe(
    //         data => {
    //             this.email = data.body.email;
    //         },
    //         error => console.error(error)
    //     );
    //     form.reset();
    }

    onCancel() {
      this.loginForm.reset();
    }
}
