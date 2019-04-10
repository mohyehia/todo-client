import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Todo[]>('http://localhost:8080/api/todos');
  }

  deleteTodo(id: number) {
    return this.http.delete(`http://localhost:8080/api/todos/${id}`);
  }

  getTodo(id: number) {
    return this.http.get<Todo>(`http://localhost:8080/api/todos/${id}`);
  }

  updateTodo(id: number, todo: Todo) {
    return this.http.put<Todo>(`http://localhost:8080/api/todos/${id}`, todo);
  }

  addTodo(todo: Todo) {
    return this.http.post<Todo>(`http://localhost:8080/api/todos`, todo);
  }
}
