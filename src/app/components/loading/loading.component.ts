import {Component, EventEmitter, Input} from '@angular/core';
import {LoadingService} from "../../services/loading.service";

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
  close: boolean = false
  show: boolean = false

  constructor(private loading: LoadingService) {
    this.loading.status.subscribe((status) => {
      if (status) {
        this.show = true;
      } else {
        this.close = true;
        setTimeout(() => {
          this.show = false;
          this.close = false;
        }, 500)
      }
    })
  }


}
