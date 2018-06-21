import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  password = '';

  constructor() { }

  ngOnInit() {
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
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
}
