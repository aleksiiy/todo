import {Component, OnDestroy, ViewEncapsulation} from '@angular/core';
import {IInput} from "../../components/input/input.component";
import { Router } from "@angular/router";
import {AuthService} from "../../services/auth.service";
import * as Interfaces from "../../shered/interfaces"
import {LoadingService} from "../../services/loading.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnDestroy {
  regexEmail: string = "([-!#-\'*+/-9=?A-Z^-~]+(\\.[-!#-\'*+/-9=?A-Z^-~]+)*|\"([]!#-[^-~ \\t]|(\\\\[\\t -~]))+\")@[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)+";
  regexPass: string = "^(?=.*[A-z])[A-z\d]{6,}$";
  data: Interfaces.IUser = {
    icon: "user",
    email: "",
    password: ""
  }

  lSub: Subscription
  constructor(
    public router: Router,
    private authService: AuthService,
    private loading: LoadingService) {}

  handlerVariables(data: IInput) {
    this.data[data.name] = data.text;
  }

  login() {
    this.loading.status.emit(true);
    this.lSub = this.authService.login(this.data).subscribe((res) => {
      this.loading.status.emit(false);
    }, (error) => {
      console.error(error);
      this.loading.status.emit(false);
    });
  }

  ngOnDestroy() {
    if (this.lSub) {
      this.lSub.unsubscribe();
    }
  }

}
