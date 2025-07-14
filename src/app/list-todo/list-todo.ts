import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';


type AddTod = {
   id:number;
  todo:string;
  compleadted:boolean

}

@Component({
  selector: 'app-list-todo',
  imports:[NgFor],
  templateUrl: './list-todo.html'
})
export class ListTodo {

  @Input() todos:AddTod[] = [] 

}
