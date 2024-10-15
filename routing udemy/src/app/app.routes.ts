import { Routes, RoutesRecognized } from "@angular/router";
import { TaskComponent } from "./tasks/task/task.component";
import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { UserTasksComponent } from "./users/user-tasks/user-tasks.component";
import { TasksComponent } from "./tasks/tasks.component";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";
import { NotFoundComponent } from "./app/not-found/not-found.component";

export const routes:Routes=[
    {
        path:"",
        component:NoTaskComponent
    },
    {
            path:'users/:userId',
            component:UserTasksComponent,
            children:[
                {
                    path:'',
                    redirectTo:'tasks',
                    pathMatch:"prefix"
                },
                {
                    path:'tasks',
                    component:TasksComponent
                },
                {
                     path:'tasks/new',
                     component:NewTaskComponent
                }
            ]
            
     },{
        path:'**',
        component:NotFoundComponent

     }
]