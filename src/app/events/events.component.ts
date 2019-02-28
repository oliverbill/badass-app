import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../tasks/task';
import { EventService } from '../event.service';
import { TaskService } from '../task.service';
import { Event } from '../event';
import { Location } from '@angular/common';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  location:Location;
  events:Event[];
  tasks:Task[];
  newEvent:Event;
  @Input() taskName: string;
  @Input() player: string;

  saveEvent(): void{
    let t:Task = {name:this.taskName,xp:2};
    this.newEvent = {player:this.player,task:t};

    this.eventService.save(this.newEvent).subscribe();

    this.goBack();
  }

  constructor(private eventService: EventService,private taskService: TaskService) { }

  ngOnInit() {
    this.getEvents();
    this.getTasks();
  }

  getEvents(): void{
    this.eventService.getEvents()
      .subscribe(events => this.events = events);
  }

  getTasks(): void{
    this.taskService.getTasks()
      .subscribe(tasks => this.tasks = tasks);
  }

  goBack(): void {
    this.location.back();
  }
}
