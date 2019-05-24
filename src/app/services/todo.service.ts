import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo';
import { API_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Todo[]>(`${API_URL}/api/todos`);
  }

  deleteTodo(id: string) {
    return this.http.delete(`${API_URL}/api/todos/${id}`);
  }

  getTodo(id: string) {
    return this.http.get<Todo>(`${API_URL}/api/todos/${id}`);
  }

  updateTodo(id: string, todo: Todo) {
    return this.http.put<Todo>(`${API_URL}/api/todos/${id}`, todo);
  }

  addTodo(todo: Todo) {
    return this.http.post<Todo>(`${API_URL}/api/todos`, todo);
  }
}
