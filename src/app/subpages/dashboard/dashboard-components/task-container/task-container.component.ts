import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { selector } from 'rxjs/operator/publish';

import { Task } from './../../../../models/task.model';

@Component({
  selector: 'app-task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.scss']
})
export class TaskContainerComponent implements OnInit {

  tasks: Array<Task> = [];

  constructor(private dragulaService: DragulaService) {

  }

  ngOnInit() {
    const list = ['afterthought', 'downtown', 'observation', 'beginner', 'snail', 'coal', 'car'];
    for (let i = 0; i < list.length; i++) {
      this.tasks.push(new Task(list[i]));
    }
  }

  addTask() {
    this.tasks.push(new Task(''));
  }

  taskDone(taskIndex: number) {
    setTimeout(() => {
      this.tasks.splice(taskIndex, 1);
    }, 500);
  }
}
