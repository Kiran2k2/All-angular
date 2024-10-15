import { Component, computed, inject, input } from '@angular/core';

import { TaskComponent } from './task/task.component';
import { Task } from './task/task.model';
import { TasksService } from './tasks.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent,RouterLink],
})
export class TasksComponent {
  userId=input.required<string>();
  order=input<'asc'|'dsc'>()
  private taskService=inject(TasksService)
  userTasks=computed(()=>
    this.taskService
  .allTasks().
  filter((task)=>task.userId===this.userId())
  .sort((a,b)=>{
    if(this.order()==='dsc'){
      return a.id > b.id? -1 : 1

    }
    else{
      return a.id> b.id ? 1:-1
    }
  })
  

  )
     
  

}