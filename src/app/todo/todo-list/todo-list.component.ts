import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  title: string = '';
  toDoList: any[] = [];
  totalCompleted: number = 0;

  onAddToDoTitleClickHandler(titleInput: HTMLInputElement): void {
    if (titleInput && titleInput.value != '') {
      this.toDoList.push({
        title: titleInput.value,
        isComplete: false,
      });
      titleInput.value = '';
    }
  }
  onStatusChange(index: number, isComplete: boolean): void {
    if ( index >= 0) {
      let todo = this.toDoList[index];
      todo.isComplete = !isComplete;
      this.toDoList[index] = todo;

      this.totalCompleted = this.toDoList
        ? this.toDoList.filter((ele) => ele.isComplete === true).length
        : 0;
    }
  }
  onKey(inputValue: string): void {
    this.title = inputValue;
  }
}
