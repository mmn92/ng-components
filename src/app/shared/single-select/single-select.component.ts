import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-single-select',
  templateUrl: './single-select.component.html',
  styleUrls: ['./single-select.component.css'],
})
export class SingleSelectComponent implements OnInit {
  // @Input()
  itemList = ['First item', 'Second item', 'Third item'];
  // @Input()
  inputHandler = (val: Observable<any | string>) => {
    val.subscribe(console.log);
  };

  inputControl = new FormControl('');

  constructor() {}

  ngOnInit(): void {
    this.inputHandler(this.inputControl.valueChanges);
  }
}
