import { Task } from '../tasks/task';

export class Event{
    constructor(private id: number,private player: string,private task: Task){}
}
