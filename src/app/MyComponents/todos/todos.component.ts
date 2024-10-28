import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../todo';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];

  ngOnInit(): void {
    const todos = localStorage.getItem('todos');
    if (todos) {
      this.todos = JSON.parse(todos);
    }
  }

  saveTodos(): void {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  deleteTodo(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
      this.saveTodos();
    }
  }

  addTodo(todo: Todo): void {
    this.todos.push(todo);
    this.saveTodos();
  }

  editTodo(): void {
    this.saveTodos();
  }
}
