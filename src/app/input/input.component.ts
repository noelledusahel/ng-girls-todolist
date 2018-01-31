import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `
  <p>
    <input [value]="title"
      (keyup.enter)="changeTitle(inputElement)" #inputElement>
      <button class='btn' (click)="changeTitle(inputElement)">
        Save
      </button>
  </p>
  `,
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  title: string = '';

  constructor() { 
  }

  ngOnInit() {
  }
  @Output() submit: EventEmitter<string> = new EventEmitter();

  changeTitle(newTitle: string): void {
    this.submit.emit(newTitle);
  }

}
