export default class Task {
    constructor(taskName, description, dueDate, priority) {
        this.taskName = taskName;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    // Return taskName
    get returnTaskName() {
        return this.taskName;
    }

    // Return description
    get returnDescription() {
        return this.description;
    }

    // Return due date
    get returnDueDate() {
        return this.dueDate;
    }

    // Return priority
    get returnPriority() {
        return this.priority;
    }

}