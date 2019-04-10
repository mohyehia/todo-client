import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/models/todo';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo = new Todo();
  id: number;

  constructor(private todoService: TodoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
// tslint:disable-next-line: no-string-literal
    this.id = this.route.snapshot.params['id'];
    if (this.id > 0) {
      this.todoService.getTodo(this.id).subscribe(res => {
        this.todo = res;
      });
    }
  }

  saveTodo() {
    if (this.id > 0) {
      this.todoService.updateTodo(this.id, this.todo).subscribe(res => {
        console.log(res);
        this.router.navigate(['todos']);
      }, error => { console.log(error); });
    } else {
      this.todoService.addTodo(this.todo).subscribe(res => {
        console.log(res);
        this.router.navigate(['todos']);
      }, error => { console.log(error); });
    }
  }

}
