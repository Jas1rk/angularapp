import { Component, EventEmitter, Output, signal } from '@angular/core';
import {FormsModule} from '@angular/forms'


type Addtod = {
  id:number;
  todo:string;
  compleadted:boolean
}

@Component({
  selector: 'app-add-todo',
  imports: [FormsModule],
  templateUrl: './add-todo.html',
})
export class AddTodo {

  todos = signal<Addtod[]>([])
  input:string = ""

  @Output() listTodo = new EventEmitter<Addtod[]>()


  handleAdd () {
    if(this.todos().find((t)=> t.todo.replace(/\s+/g,"").toLowerCase() === this.input.replace(/\s+/g,"").toLowerCase())){
      alert("sorry this item is already exist")
      return 
    }

    this.todos.update((pr)=>[...pr, {id : Date.now(), todo:this.input , compleadted : false}])

    this.listTodo.emit(this.todos())

    this.input = ""
  }



}
