import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Todo } from '../../todo';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  title: string = '';
  desc: string = '';
  @Output() todoAdd : EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  onSubmit(): void {
    if (this.title && this.desc) {
      const newTodo: Todo = {
        sno: 8, 
        title: this.title,
        desc: this.desc,
        active: true
      };

      this.todoAdd.emit(newTodo);
      console.log(newTodo);

      this.title = '';
      this.desc = '';
    }
  }

}
