import {Component, EventEmitter} from '@angular/core';
import {AuthService} from "./services/auth.service";

interface AppStore {

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(auth: AuthService) {}
}
