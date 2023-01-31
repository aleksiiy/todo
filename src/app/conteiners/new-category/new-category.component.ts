import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IInput} from "../../components/input/input.component";
import defaultCategory from "../../shered/consts/category";

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.scss']
})
export class NewCategoryComponent implements OnInit {

  @Input()
  show: boolean = false;

  @Output()
  response: EventEmitter<void> = new EventEmitter<void>();
  data = {...defaultCategory};
  constructor() {

  }

  handlerVariables(data: IInput) {
    this.data[data.name] = data.text;
  }

  appendCategory() {
    console.log(this.data);
    this.response.emit();
    this.data = {...defaultCategory}
  }

  ngOnInit() {
  }
}
