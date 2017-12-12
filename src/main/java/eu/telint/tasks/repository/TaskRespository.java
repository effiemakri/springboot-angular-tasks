package eu.telint.tasks.repository;

import eu.telint.tasks.domain.Task;
import org.springframework.data.repository.CrudRepository;

public interface TaskRespository extends CrudRepository<Task, Long> {
}
