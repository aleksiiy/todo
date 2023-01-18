import {Component, ViewEncapsulation} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {IInput} from "../../components/input/input.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {
  regexEmail: string = "([-!#-\'*+/-9=?A-Z^-~]+(\\.[-!#-\'*+/-9=?A-Z^-~]+)*|\"([]!#-[^-~ \\t]|(\\\\[\\t -~]))+\")@[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)+";
  regexPass: string = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$";

  constructor() {
  }
  handlerVariables(data: IInput) {
    console.log("data: ", data)
  }

}
