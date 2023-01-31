import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() icon: string = '';
  @Input() iconSide: 'left' | 'right' = 'right';
  @Input('text') text: string = 'Button';
  @Input() disable: boolean = false;

  @Output() response: EventEmitter<void> = new EventEmitter<void>();

  returnEvent() {
    if (!this.disable) {
      this.response.emit();
    }
  }

}
