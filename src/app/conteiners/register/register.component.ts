import {Component, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import {IInput} from "../../components/input/input.component";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent {

  regexEmail: string = "([-!#-\'*+/-9=?A-Z^-~]+(\\.[-!#-\'*+/-9=?A-Z^-~]+)*|\"([]!#-[^-~ \\t]|(\\\\[\\t -~]))+\")@[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)+";
  regexPass: string = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$";

  constructor(public router: Router) {}

  handlerVariables(data: IInput) {
    console.log("data: ", data)
  }

  register() {
    console.log('dd')
  }

}
