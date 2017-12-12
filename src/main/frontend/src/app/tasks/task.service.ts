/* service class for task */

import {EventEmitter, Inject, Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {HttpClient} from "@angular/common/http";
import {Task} from "./task.model";

@Injectable()
export class TaskService {

    // emit an event to which we can subscribe to, and when that happens we can react to it
    onTaskAdded = new EventEmitter<Task>();

    constructor(@Inject(HttpClient) private http: HttpClient) {
        console.log("In constructor of TaskService - " + this.http);
    }

    getTasks() {
        // here we need to reach out to spring boot and get a list of tasks
        console.log("TaskService: getTasks()");
        return this.http.get('/api/tasks');//.map(response => response.json());
    }

    saveTask(task: Task, checked: boolean) {
        task.completed = checked;
        return this.http.post("/api/tasks/save", task);
    }

    addTask(task: Task) {
        return this.http.post('/api/tasks/save', task);
    }
}
