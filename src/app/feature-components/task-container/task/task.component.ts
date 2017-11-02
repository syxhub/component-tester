import { DragulaService } from 'ng2-dragula';
import { Task } from './../../../models/task.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  viewProviders: [DragulaService]
})
export class TaskComponent implements OnInit {

  @Input() task: Task;

  ngOnInit() {
  }

}
