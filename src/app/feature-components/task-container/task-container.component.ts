import { Task } from './../../models/task.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.scss']
})
export class TaskContainerComponent implements OnInit {

  tasks: Array<Task> = [];

  constructor() {
    const list = ['afterthought', 'downtown', 'observation', 'beginner', 'snail', 'coal', 'car'];
    for (let i = 0; i < list.length; i++) {
      this.tasks.push(new Task(list[i]));
    }
  }

  ngOnInit() {
  }

}
