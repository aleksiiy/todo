import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header-item',
  templateUrl: './header-item.component.html',
  styleUrls: ['./header-item.component.scss']
})
export class HeaderItemComponent implements OnInit {

  details: boolean = false;
  showDetails: boolean = false;

  @Input() icon: string;
  @Input() placeholder: string;
  @Input() itemsDetail: {
    icon: string
    text?: string
    url: string
    action: Function
  }[] = [];

  constructor() {

  }

  ngOnInit() {
    this.details = this.itemsDetail.length > 0;
  }

  openDetailsItems() {
    if (this.details && !this.showDetails) {
      this.showDetails = true;
    } else {
      this.showDetails = false;
    }
  }

  close() {
    if(this.showDetails) {
      this.showDetails = false;
    }
  }
}
