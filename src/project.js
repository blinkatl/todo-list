// ==========================
// Project class
//   The Project class represents a project which can contain multiple tasks.
//   It provides methods to create and manage project cards and sidebar buttons,
//   append them to the DOM, and manage tasks within the project.
// ==========================
import { createAddIcon } from './svgUtils.js';
import sidebarProjectButtonIcon from './svgUtils.js';
import { modal, loadTaskForm } from './index.js';

export default class Project {
    constructor(name) {
        this.name = name;               // Name of project
        this.tasks = [];                // Empty array to hold tasks
        this.sidebarProjectBtn = null;  // Project button for sidebar that createSidebarProjectBtn() will create
        this.projectCard = null;        // Project Card that createProjectCard() creates
    }

    // Return name of project
    get returnName() {
        return this.name;
    }

    // Create project card that contains header and task card container
    createProjectCard() {
        this.projectCard = document.createElement('div');
        this.projectCard.className = 'project-card';
      
        this.projectCard.innerHTML = `
          <div id="project-card-header">
            <h2>${this.name}</h2>
          </div>
          <div id="task-card-container">
            <!--Task cards inserted here-->
            <div class="add-task-card" id="add-task-card">
                <button id="add-task-button">Add Task</button>
            </div>
          </div>
        `;

        // When "add task" button in task/project cards are clicked
        this.projectCard.querySelector('#add-task-button').addEventListener('click', () => {
            // Open modal and load task form
            modal.style.display = "block";
            loadTaskForm(this);

        });

        return this.projectCard;        
    }

    // Append project card element to the DOM
    appendProjectCardToDOM(modal, loadTaskForm) {
        const projectContainer = document.getElementById('project-container');

        // Add the project card to the DOM
        projectContainer.appendChild(this.projectCard);

        // Add "add task" button (querySelector is used because it takes scope into acc)
        const addTaskBtn = this.projectCard.querySelector('#add-task-button');
        const addIcon = createAddIcon({ width: '24px', height: '24px', color: '#2196f3', strokeWidth: 1.5 });
        addTaskBtn.insertBefore(addIcon, addTaskBtn.firstChild);
    }

    // Create sidebar project button
    createSidebarProjectBtn() {
        // Create sidebar button
        this.sidebarProjectBtn = document.createElement('button');
        this.sidebarProjectBtn.className = "sidebar-project-button";
        // Add project icon to button
        const projectIcon = new sidebarProjectButtonIcon("24px", "24px", "#2196f3");
        this.sidebarProjectBtn.appendChild(projectIcon.getSVG());
        // Add project name to button
        this.sidebarProjectBtn.appendChild(document.createTextNode(this.name));

        return this.sidebarProjectBtn;
    }

    // Append sidebar project button to the DOM's sidebar-project-container
    appendSidebarProjectBtnToDOM() {
        document.getElementById('sidebar-project-container').appendChild(this.sidebarProjectBtn);
    }

    // Add a task to the project
    addTask(task) {
        this.tasks.push(task);
    }

    // Update the task display in the project card
    updateTaskDisplay() {
        const taskContainer = this.projectCard.querySelector('#task-card-container');

        // Clear existing tasks
        taskContainer.querySelectorAll('.task-card').forEach(taskCard => taskCard.remove());

        // Add tasks to the DOM
        this.tasks.forEach(task => {
            const taskCard = task.createTaskCard();
            taskContainer.insertBefore(taskCard, taskContainer.querySelector('#add-task-card'));
        });
    }
}