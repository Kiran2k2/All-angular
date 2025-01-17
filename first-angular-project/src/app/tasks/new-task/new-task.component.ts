import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Output()cancle=new EventEmitter<void>()
  enteredTitle=""
  enteredSummary=""
  enteredDueDate=""

  onCancle(){

    this.cancle.emit()
  }

}
