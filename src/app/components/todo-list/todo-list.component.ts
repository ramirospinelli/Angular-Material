import { DialogComponent } from '../../components/dialog/dialog.component';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

export interface Item {
  id: string;
  title: string;
  isDone: boolean;
}

@Component({
  selector: 'app-todo-list-component',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  @Input() list: Item[] = [];
  doneList: Item[] = [];
  todoList: Item[] = [];

  updateLists(): void {
    this.doneList = this.list.filter(item => item.isDone);
    this.todoList = this.list.filter(item => !item.isDone);
  }

  ngOnInit(): void {
    this.updateLists();
  }

  onClick(item: Item): void {
    const itemUpdated = this.list.find(i => i.id === item.id);
    itemUpdated.isDone = !itemUpdated.isDone;

    this.updateLists();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.list.push({
        id: result,
        title: result,
        isDone: false,
      });
      this.updateLists();
    });
  }
}
