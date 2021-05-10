import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/common/models/ToDo';
import { User } from 'src/app/common/models/User';
import { UsersService } from 'src/app/common/services/users.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  userList: User[] = [];

  selectedUser: string;
  userTodos: ToDo[] = [];

  todoList: ToDo[] = [];
  doneList: ToDo[] = [];

  constructor(public usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUsers().then(
      (data) =>  { this.userList = data; }
    );
  }

  getUserTodos() {
    let callbackUser = this.userList.find((x) => x.name == this.selectedUser);
    this.usersService.getUserTodos(callbackUser.id).then(
      (data) => { this.userTodos = data; this.setDragAndDrop(); }
    )
  }

  setDragAndDrop() {
    this.todoList = this.userTodos.filter((x) => x.completed == false );
    this.doneList = this.userTodos.filter((x) => x.completed == true );
    console.log(this.todoList);
    console.log(this.doneList);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

}
