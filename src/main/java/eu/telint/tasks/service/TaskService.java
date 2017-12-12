package eu.telint.tasks.service;

import eu.telint.tasks.domain.Task;

public interface TaskService {
    Iterable<Task> list();
    Task save(Task task);
}
