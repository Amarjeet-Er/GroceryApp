import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonModal } from '@ionic/angular';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  @ViewChild('VerifyEmail') VerifyEmail!: IonModal;
  @ViewChild('confirmpass') confirmpass!: IonModal;
  forgotForm !: FormGroup
  otpForm !: FormGroup
  constructor(
    private _router: Router,
    private _fromBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.forgotForm = this._fromBuilder.group({
      Email: ['', Validators.required]
    })

    this.otpForm = this._fromBuilder.group({
      digit1: ['', Validators.required],
      digit2: ['', Validators.required],
      digit3: ['', Validators.required],
      digit4: ['', Validators.required],
      digit5: ['', Validators.required],
      digit6: ['', Validators.required],
    });
  }

  async sendOtp() {
    this.VerifyEmail.present();
  }

  onInputChange(event: any, nextInput: HTMLInputElement | null) {
    const input = event.target as HTMLInputElement;
    if (input.value && nextInput) {
      nextInput.focus();
    }
  }

  onInputKeyDown(event: KeyboardEvent, currentInput: HTMLInputElement, previousInput: HTMLInputElement | null) {
    if (currentInput.value && event.key !== 'Backspace' && event.key !== 'Delete') {
      event.preventDefault();
    }
    if (event.key === 'Backspace') {
      if (currentInput.value) {
        currentInput.value = '';
      } else if (previousInput) {
        previousInput.focus();
        previousInput.value = '';
      }
    }
  }

  async confirmOtp() {
    this.confirmpass.present();
  }
  
} 