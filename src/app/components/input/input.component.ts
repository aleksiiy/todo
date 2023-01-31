import {Component, EventEmitter, Input, Output} from '@angular/core';

export interface IInput {
  text: string
  name: string
  validation: boolean
}

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input('placeholder') placeholder: string = 'Enter value';
  @Input('icon') icon: string = '';
  @Input() validationRegex: string = '';
  @Input('warningText') warningText: string = 'Text is not valid';
  @Input('value') value: string = '';
  @Input('name') name: string = '';
  @Input('type') type: 'email' | 'password' | 'text' = 'text';

  @Output() response: EventEmitter<IInput> = new EventEmitter<IInput>();

  validationNotify: boolean = true
  private newRegExp: RegExp;
  constructor() {
    if (this.validationRegex !== '') {
      this.newRegExp = new RegExp(this.validationRegex);
    }
  }

  validation() {
    if (this.validationRegex !== '' && this.value !== '') {
      this.validationNotify = new RegExp(this.validationRegex).test(this.value)
    } else {
      this.validationNotify = true;
    }
    this.returnData();
    return this.validationNotify;
  }
  returnData() {
    this.response.emit({
      text: this.value,
      name: this.name,
      validation: this.validationNotify
    });
  }
}
