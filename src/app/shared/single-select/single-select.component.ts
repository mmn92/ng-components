import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

type Item = {
  description: string;
  value: string;
};
const updatedList: Array<Item> = [
  { description: 'New Value', value: 'first' },
  { description: 'Updated', value: 'second' },
  { description: 'Mocked', value: 'third' },
];
@Component({
  selector: 'app-single-select',
  templateUrl: './single-select.component.html',
  styleUrls: ['./single-select.component.css'],
})
export class SingleSelectComponent implements OnInit {
  // @Input()
  itemList: Array<Item> = [
    { description: 'First item', value: 'first' },
    { description: 'Second item', value: 'second' },
    { description: 'Third item', value: 'third' },
  ];
  // @Input()
  inputHandler = (val: Observable<Item | string>) => {
    val
      .pipe(filter((value) => typeof value === 'string'))
      .subscribe((value) => {
        console.log(value);
        if (typeof value === 'string' && value.length > 4) {
          this.itemList = updatedList;
        }
      });
  };
  // @Input()
  displayFn = (item: Item) => item.description;
  //@Input()
  handleSelect = (item: Item) => {
    console.log('Selected item: ', item);
  };

  inputControl = new FormControl('');

  constructor() {}

  ngOnInit(): void {
    this.inputHandler(this.inputControl.valueChanges);
  }
}
