import { Component, OnInit } from '@angular/core';
import { Task } from '../tasks/task';
import { EventService } from '../event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: Event[];

  TASKS: Task[] = [
    { new Task(id:1,name:'to complete a SHORT issue with successful PRW',xp:2) },
    { new Task(id:2,name:'to complete a MEDIUM issue with successful PRW',xp:3) },
    { new Task(id:3,name:'to complete a LONG issue with successful PRW',xp:4) },
    { new Task(id:4,name:'to speak english for a whole day',xp:1) },
    { new Task(id:5,name:'to deliver issues with no bugs in QA',xp:4) },
    { new Task(id:6,name:'to log hours daily, to update status, to put the resolution, etc',xp:2) },
    { new Task(id: 7, name: 'to present a new tech or a subject to the Team',xp:2) },
    { new Task(id: 8, name: 'to find bugs and solve them',xp:1) },
    { new Task(id: 9, name: 'to solve an issue without help',xp:1) },
    { new Task(id: 10, name: 'to propose a viable solution (accepted by Globalstar Team) to an existing problem',xp:2) },
    { new Task(id: 11, name: 'to help a coleague to solve an issue',xp:3) },
    { new Task(id: 12, name: 'to document an issue',xp:2) },
    { new Task(id: 13, name: 'to brief an issue',xp:2) },
  ];

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents(): void{
    this.eventService.getEvents()
      .subscribe(events => this.events = events);
  }
}
