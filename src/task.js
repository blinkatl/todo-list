export default class Task {
    constructor(taskName, description, dueDate, priority) {
        this.taskName = taskName;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.taskCard = null;
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

    // Create task card
    createTaskCard() {
        this.taskCard = document.createElement('div');
        this.taskCard.className = 'task-card';

        this.taskCard.innerHTML = `
        <h3 id="task-card-name">${this.taskName}</h3>
        <p id="task-card-due-date">${this.dueDate}</p>
        <p id="task-card-description">${this.description}</p>
        <div class="checkbox-container">
          <div class="cbx">
            <input type="checkbox" id="cbx-12">
            <label for="cbx-12"></label>
            <svg fill="none" viewBox="0 0 15 14" height="14" width="15">
              <path d="M2 8.36364L6.23077 12L13 2"></path>
            </svg>
          </div>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="goo-12">
              <feGaussianBlur result="blur" stdDeviation="4" in="SourceGraphic"></feGaussianBlur>
              <feColorMatrix result="goo-12" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7" mode="matrix" in="blur"></feColorMatrix>
              <feBlend in2="goo-12" in="SourceGraphic"></feBlend>
              </filter>
            </defs>
          </svg>
        </div>
        <div class="divider-container">
          <hr class="divider">
        </div>
      `;
    
      return this.taskCard;
    }

}