export class TodoList {
  task;
  day;
  time;
  done;
 

  constructor(task, day, time) {
    this.task = task;
    this.day = day;
    this.time = time;
    this.done = false;
    
  }
}