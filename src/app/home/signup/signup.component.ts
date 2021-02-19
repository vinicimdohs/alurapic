import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlatfotmDetectorService } from 'src/app/core/platform/platform-detector.service';
import { NewUser } from './new-user';
import { SignUpService } from './signup.service';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';

@Component({
    templateUrl: './signup.component.html'
})
export class SignUpComponent implements OnInit {

  signupForm: FormGroup;
  @ViewChild("inputEmail") inputEmail: ElementRef<HTMLInputElement>

  constructor(private formBuilder: FormBuilder,
              private userNotTakenValidatorService : UserNotTakenValidatorService
              ,private signupService : SignUpService,
              private router : Router,
              private platformDetectorService : PlatfotmDetectorService ) {}

  ngOnInit(): void {

      this.signupForm = this.formBuilder.group({
          email: ['',
              [
                  Validators.required,
                  Validators.email
              ]
          ],
          fullName: ['',
              [
                  Validators.required,
                  Validators.minLength(2),
                  Validators.maxLength(40)
              ]
          ],
          userName: ['',
              [
                  Validators.required,
                  Validators.pattern(/^[a-z0-9_\-]+$/),
                  Validators.minLength(2),
                  Validators.maxLength(30)
              ],
              [
                this.userNotTakenValidatorService.checkUserNameTaken(),

              ]
          ],
          password: ['',
              [
                  Validators.required,
                  Validators.minLength(8),
                  Validators.maxLength(14)
              ]
          ]
      });

      this.platformDetectorService.isPlatformBrowser() &&
      this.inputEmail.nativeElement.focus();//ACESSANDO O DOM
  }

  signup(){
      const newUser = this.signupForm.getRawValue() as NewUser;
      this.signupService.signup(newUser)
      .subscribe(()=>{
          this.router.navigate(['']);
      })
  }
}
