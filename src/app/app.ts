import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddTodo } from './add-todo/add-todo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AddTodo],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('todoapp');
}
