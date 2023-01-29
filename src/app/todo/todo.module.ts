import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
// import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
// import { faStar as fasStar } from '@fortawesome/free-brands-svg-icons';

@NgModule({
  declarations: [TodoListComponent],
  imports: [CommonModule, TodoRoutingModule, FontAwesomeModule],
  exports: [TodoListComponent],
})
export class TodoModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faCirclePlus);
  }
  onAddToDoTitleClickHandler(titleInput: HTMLInputElement) {
    if (titleInput.value) {
      console.log(titleInput.value);
      titleInput.value = '';
    }
  }
}
