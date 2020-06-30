import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoService } from './todo.service';



@NgModule({
  declarations: [
    TodoListComponent,
    TodoItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TodoListComponent,
    TodoItemComponent
  ]
})
export class TodoModule {
  public static forRoot(config): ModuleWithProviders {
    return {
      ngModule: TodoModule,
      providers: [
        TodoService,
        { provide: 'config', useValue: config }
      ]
    };
  }
}
