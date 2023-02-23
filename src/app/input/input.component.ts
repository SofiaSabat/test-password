import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent { 

  passwordStrength: string = '';

  checkPassStrength(event: Event) {
    const password = (event.target as HTMLInputElement).value;
    this.passwordStrength = this.getPasswordStrength(password);
  }

  private getPasswordStrength(password: string): string {

    switch (true) {
      case this.isWeakPassword(password):
        return 'weak';
      case this.isMiddlePassword(password):
        return 'middle';
      case this.isStrongPassword(password):
        return 'strong';
      case this.isEmptyPassword(password):
        return 'empty';
      default:
        return 'short';
    }
  }

  private isWeakPassword(password: string): boolean {
    const weakPassReg = /^(\d{8,}|[\W_]{8,}|[a-zA-Z]{8,})$/;
    return weakPassReg.test(password);
  }

  private isMiddlePassword(password: string): boolean {
    const mediumPassReg = /\S{8,}/;
    const strongPassReg = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9\s]).{8,}$/;
    return mediumPassReg.test(password) && !strongPassReg.test(password);
  }

  private isStrongPassword(password: string): boolean {
    const strongPassReg = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9\s]).{8,}$/;
    return strongPassReg.test(password);
  }
  private isEmptyPassword(password: string): boolean {
    return password.trim().length === 0;
  }
}

