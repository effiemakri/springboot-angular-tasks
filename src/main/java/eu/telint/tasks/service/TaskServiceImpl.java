package eu.telint.tasks.service;

import eu.telint.tasks.domain.Task;
import eu.telint.tasks.repository.TaskRespository;
import org.springframework.stereotype.Service;

@Service
public class TaskServiceImpl implements TaskService {

    private final TaskRespository taskRespository;

    public TaskServiceImpl(TaskRespository taskRespository) {
        this.taskRespository = taskRespository;
    }

    @Override
    public Iterable<Task> list() {
        return this.taskRespository.findAll();
    }

    @Override
    public Task save(Task task) {
        return this.taskRespository.save(task);
    }
}
