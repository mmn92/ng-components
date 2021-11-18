import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-single-select',
  templateUrl: './single-select.component.html',
  styleUrls: ['./single-select.component.css'],
})
export class SingleSelectComponent implements OnInit {
  // @Input()
  itemList = ['First item', 'Second item', 'Third item'];

  inputControl = new FormControl('');

  constructor() {}

  ngOnInit(): void {
    this.inputControl.valueChanges.subscribe(console.log);
  }
}
