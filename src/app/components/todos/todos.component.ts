import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  message: string = '';

  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getAll().subscribe(res => {
      this.todos = res;
    });
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id).subscribe(res => {
      console.log(res);
      this.message = 'Todo deleted successfully!';
      this.getTodos();
    }, error => { console.log(error); }
    );
  }

  updateTodo(id: number) {
    this.router.navigate(['todos', id]);
  }
}
