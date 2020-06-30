import { Component } from '@angular/core';
import { TodoService } from 'angular-lib-todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-lib';
  constructor(private todo: TodoService) {
    this.todo.show();
  }
}
