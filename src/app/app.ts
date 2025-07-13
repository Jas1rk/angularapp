import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddTodo } from './add-todo/add-todo';
import { ListTodo } from './list-todo/list-todo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AddTodo,ListTodo],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('todoapp');
}
