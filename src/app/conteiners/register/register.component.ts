import {Component, OnDestroy, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import {IInput} from "../../components/input/input.component";
import {AuthService} from "../../services/auth.service";
import {LoadingService} from "../../services/loading.service";
import * as Interfaces from "../../shered/interfaces";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnDestroy {

  regexEmail: string = "([-!#-\'*+/-9=?A-Z^-~]+(\\.[-!#-\'*+/-9=?A-Z^-~]+)*|\"([]!#-[^-~ \\t]|(\\\\[\\t -~]))+\")@[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)+";
  regexPass: string = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$";

  constructor(
    public router: Router,
    private authService: AuthService,
    private loading: LoadingService) {}

  data: Interfaces.IUser = {
    icon: "user",
    email: "",
    password: ""
  }

  rSub: Subscription
  handlerVariables(data: IInput) {
    this.data[data.name] = data.text;
  }

  register() {
    this.loading.status.emit(true);
    this.rSub = this.authService.register(this.data).subscribe((res) => {
      this.router.navigateByUrl('/board');
    }, (error) => {
      console.error(error);
      this.loading.status.emit(false);
    });
  }

  ngOnDestroy() {
    if (this.rSub) {
      this.rSub.unsubscribe();
    }
  }
}
