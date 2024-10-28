import { Component, EventEmitter, Input, OnInit, Output, output } from '@angular/core';
import { Todo } from '../../todo';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent  {
  @Input() todo! :Todo
  @Output() todoDelete : EventEmitter<Todo> = new EventEmitter();
  @Output() todoEdit: EventEmitter<Todo> = new EventEmitter();

  isEditing: boolean = false;
  editedTitle: string = '';
  editedDesc: string = '';

  ngOnInit(): void {
    this.editedTitle = this.todo.title;
    this.editedDesc = this.todo.desc;
   }

  onClick(todo :Todo){
    this.todoDelete.emit(todo);
  }

  onClickEdit(): void {
    this.isEditing = true;
  }

  onSaveEdit(todo: Todo): void {
    todo.title = this.editedTitle;
    todo.desc = this.editedDesc;
    this.todoEdit.emit(todo);
    this.isEditing = false;
  }

  onCancelEdit(): void {
    this.isEditing = false;
    this.editedTitle = this.todo.title;
    this.editedDesc = this.todo.desc;
  }
}
