import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-item',
  template: `
   {{ todoItem.title }}
   <button (click)="removeItem()">
   Remove
   </button>
  `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  removeItem() {
    this.remove.emit(this.todoItem);
  }

  constructor() { }

  ngOnInit() {
  }
  @Input() todoItem: any;
  @Output() remove:EventEmitter<any> = new EventEmitter();

}
