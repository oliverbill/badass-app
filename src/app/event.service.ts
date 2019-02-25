import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  getEvents(): Observable<Event[]>{
    return of(new Event(1,'Eduardo',new Task(id:1,name:'to complete a SHORT issue with successful PRW',xp:2)));
  }
}
