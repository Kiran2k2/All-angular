import { Component, computed, inject, signal } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
import { TasksService } from '../task.service';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
})
export class TasksListComponent {

  private taskService=inject(TasksService)
  selectedFilter = signal<string>('all');
  // tasks = this.taskService.allTask;

  tasks=computed(()=>{
    switch(this.selectedFilter()){
      case 'all':
        // return this.selectedFilter.all
    }
  })

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
