import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'app/shared/fetch-api/services/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    test : Date = new Date();
    focus;
    focus1;
    formGroup: FormGroup;
    errorInvalid: boolean = false;
    constructor(
      private userService: UserService,
      private router: Router
    ) { }

    ngOnInit() {
        this.formGroup = new FormGroup({
            email: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required])
        })
    }

    submit(value: { email: string, password: string }, valid: boolean) {
        this.errorInvalid = false;
        if (valid) {
            this.userService.login()
              .subscribe({
                  next: (res) => {
                      const find = res.find((data) => {
                          return data.user === value.email && data.password === value.password;
                      });
                      if (find) {
                          this.userService.stateLogin(true);
                          localStorage.setItem('user_login', JSON.stringify(value))
                          this.router.navigate(['home']);
                      } else {
                          this.errorInvalid = true;
                      }
                  }
              })
        }
    }
}
