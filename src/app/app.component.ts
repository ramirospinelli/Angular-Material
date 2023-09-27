import { Component } from '@angular/core';
import { Item } from './components/todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  list1: Item[] = [
    {
      id: '1',
      title: 'compras',
      isDone: false,
    },
    {
      id: '2',
      title: 'lavar auto',
      isDone: true,
    },
    {
      id: '3',
      title: 'cocinar',
      isDone: false,
    },
  ];
}
