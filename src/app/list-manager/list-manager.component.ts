import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'todo-list-manager',
  template: `
    <div style="text-align:center">
      <h1>
        Welcome to {{ title | uppercase }}!
      </h1>
      <todo-input (submit)="addItem($event)"></todo-input>

      <ul>
        <li *ngFor="let item of todoList">
          <todo-item (remove)="removeItem($event)" [todoItem]="item"></todo-item>
        </li>
      </ul>

  `,
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
  title = 'todo';

  addItem(title:string): void {
    this.todoList = this.todoListService.addItem( { item:title });
  }

  removeItem(item) {
    this.todoList = this.todoListService.removeItem(item);
  }

  constructor( private todoListService:TodoListService) { }

  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
  }

}
