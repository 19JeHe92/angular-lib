import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    @Inject('config') private config
  ) { }

  show(): void {
    console.log('show todo');
  }

  delete(): void {
    console.log('delete todo');
  }

  update(): void {
    console.log('update todo');
  }
}
