import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todoList:string[]= []
  taskName :string = ""


  addTodo(){ 
    if(this.taskName ==""){
      return
    }
    console.log(this.taskName);
    this.todoList.push(this.taskName)
    this.taskName=""
  } 


  removeTodo(i:number){
    this.todoList= this.todoList.filter((Todo   , index)=>{
        return index != i
    })
  }

}
