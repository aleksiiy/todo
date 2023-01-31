import {Component, OnInit} from '@angular/core';
import {LoadingService} from "../../services/loading.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  init: boolean = false
  createCategory: boolean = false;
  testData = [
    {
      icon: 'logout',
      text:'logout',
      url: '',
      action: () => this.logout()
    }];

  constructor(
    private loading: LoadingService,
    private authService: AuthService) {

  }

  ngOnInit() {
    setTimeout(() => {
      this.init = true;
    })
    this.loading.status.emit(false);
  }

  public logout(): void {
    this.authService.logout()
  }

}
