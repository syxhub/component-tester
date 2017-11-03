import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

import { Task } from './../../../../../models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  viewProviders: [DragulaService],
  animations: [
    trigger('fadeOut', [
      state('false', style({ opacity: 1 })),
      state('true', style({ opacity: 0 })),
      transition('false => true', animate('500ms')),
    ])
  ],
})
export class TaskComponent implements OnInit {

  @Input() task: Task;

  @Output() onCheck = new EventEmitter();

  isDeleted = 'false';

  ngOnInit() {
  }

  checked() {
    this.isDeleted = 'true';
    this.onCheck.emit();
  }

}
