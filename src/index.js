// "npm run build"->"npm start" to launch html
import './style.css';
import Task from './task.js';
import Project from './project.js';
import plusIcon from '../files/images/plus.png';
import sidebarProjectButtonIcon from './svgUtils.js';
import { createAddIcon } from './svgUtils.js';

const addBtn = document.getElementById('add-sidebar-button');     // Add button for sidebar
const modal = document.getElementById("myModal");                 // Modal
const span = document.getElementsByClassName("close")[0];         // X button for modal
const toggleFormCheckbox = document.getElementById('toggleForm'); // Checkbox to toggle between project/task form in modal
const taskForm = document.getElementById('task-form');            // Task form inside modal
const modalTitle = document.getElementById('modal-title');        // Text for modal title
const addTaskBtn = document.getElementById('add-task-button');    // Add task button for task/project cards

// Load into HTML when DOM loads
document.addEventListener('DOMContentLoaded', () => {
  const imgElement = document.getElementById('plus-icon');
  imgElement.src = plusIcon;

  const addIcon = createAddIcon({ width: '24px', height: '24px', color: '#2196f3', strokeWidth: 1.5 });
  addTaskBtn.insertBefore(addIcon, addTaskBtn.firstChild);
});

// When "add task" button in sidebar is clicked
addBtn.addEventListener('click', () => {
  modal.style.display = "block";  // Open modal
  const projectSliderContainer = document.getElementById('project-slider-container')
  if (projectSliderContainer.style.visibility === 'hidden') {
    projectSliderContainer.style.visibility = 'visible';
  }
});

// When "add task" button in task/project cards are clicked
addTaskBtn.addEventListener('click', () => {
  // Open modal but hide slider
  modal.style.display = "block";
  loadTaskForm();
  const projectSliderContainer = document.getElementById('project-slider-container')
  projectSliderContainer.style.visibility = 'hidden';
  toggleFormCheckbox.checked = false;
});

// When the user clicks on <span> (x)
span.addEventListener('click', () => {
  modal.style.display = "none";   // Close modal
});

// When the user clicks anywhere outside of the modal
window.addEventListener('click', () => {
  if (event.target == modal) {
    closeModal();
  }
});

// Event listender for form submit
document.getElementById('task-form').addEventListener('submit', handleTaskFormSubmit);

// Function to handle form submission
function handleTaskFormSubmit(event)
{
  event.preventDefault(); // Prevent form from submitting

  if (toggleFormCheckbox.checked) {
    //Store values from project form and create/append project card and sidebar btn
    const projectName = document.getElementById('projectName').value;
    const project = new Project(projectName);
    const projectCard = createProjectCard(project);
    const sidebarProjectBtn = createSidebarProjectBtn(project);
    appendProjectCardToDOM(projectCard);
    appendSidebarProjectBtnToDOM(sidebarProjectBtn);
  } else {
    //Store values from task form and create/append task card
    const taskName = document.getElementById('taskName').value;
    const dueDate = document.getElementById('dueDate').value;
    const description = document.getElementById('description').value;
    const task = new Task(taskName, description, dueDate, 0);
    const taskCard = createTaskCard(task);
    appendTaskCardToDOM(taskCard);
  }
  closeModal();
}

// Create project card element
function createProjectCard(project) {
  const projectCard = document.createElement('div');
  projectCard.className = 'project-card';

  projectCard.innerHTML = `
    <div id="project-card-header">
      <h2>${project.projectName}</h2>
    </div>
  `;

  return projectCard;
}

// Create sidebar project button
function createSidebarProjectBtn(project) {
  const sidebarProjectBtn = document.createElement('button');
  sidebarProjectBtn.className = "sidebar-project-button";

  // Add project icon to button
  const projectIcon = new sidebarProjectButtonIcon("24px", "24px", "#2196f3");
  sidebarProjectBtn.appendChild(projectIcon.getSVG());

  sidebarProjectBtn.appendChild(document.createTextNode(project.projectName)); // Append project name

  return sidebarProjectBtn;
}

// Append project card element to the DOM
function appendProjectCardToDOM(projectCard) {
  const projectContainer = document.getElementById('project-container');
  projectContainer.appendChild(projectCard);
}

// Append sidebar project button to the DOM
function appendSidebarProjectBtnToDOM(sidebarProjectBtn) {
  const sidebarProjectContainer = document.getElementById('sidebar-project-container');
  sidebarProjectContainer.appendChild(sidebarProjectBtn);
}

// Create a task card element
function createTaskCard(task) {
  const taskCard = document.createElement('div');
  taskCard.className = 'task-card';

  taskCard.innerHTML = `
    <h3 id="task-card-name">${task.taskName}</h3>
    <p id="task-card-due-date">${task.dueDate}</p>
    <p id="task-card-description">${task.description}</p>
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

  return taskCard;
}

// Append task card element to the DOM
function appendTaskCardToDOM(taskCard) {
  const taskContainer = document.getElementById('task-card-container');
  const addTaskCard = document.getElementById('add-task-card');
  taskContainer.insertBefore(taskCard, addTaskCard)
  //taskContainer.appendChild(taskCard);
}

// Create "add task" card
function createAddTaskCard() {
  const addTaskCard = document.createElement('div');
  addTaskCard.className = 'add-task-card';
  const addTaskBtn = document.createElement('button');
  addTaskBtn.innerText = 'Add Task';
  addTaskCard.appendChild(addTaskBtn);

  return addTaskCard;
}

// Append "add task" card to the DOM
function appendAddTaskCard(addTaskCard) {
  const taskContainer = document.getElementById('task-card-container');
  taskContainer.appendChild(addTaskCard);
}

// Closes modal
function closeModal() {
  modal.style.display = "none";
}

// Change between project or task form in modal form checkbox
toggleFormCheckbox.onchange = () => {
  toggleFormCheckbox.checked ? loadProjectForm() : loadTaskForm();
}

// Load project form in modal
function loadProjectForm() {
  modalTitle.textContent = "Create Project";
  taskForm.innerHTML = `
    <div class="form-group">
      <input class="input" type="text" id="projectName" name="projectName" required="" autocomplete="off">
      <label class="user-label" for="projectName">Project Name</label>
    </div>
    <div class="modal-footer">
    <button type="submit" class="modal-footer-button" id="submit">Submit</button>
    <button type="button" class="modal-footer-button" id="cancel">Cancel</button>
    </div>
  `;
}

// Load task form in modal
function loadTaskForm() {
  modalTitle.textContent = "Create Task";
  taskForm.innerHTML = `
    <div class="form-group">
      <input class="input" type="text" id="taskName" name="taskName" required="" autocomplete="off">
      <label class="user-label" for="taskName">Task Name</label>
    </div>
    <div class="form-group">
      <input class="input" type="text" id="dueDate" name="dueDate" required="" autocomplete="off">
      <label class="user-label" for="dueDate">Due Date</label>
    </div>
    <div class="form-group">
      <input class="input" type="text" id="description" name="description" required="" autocomplete="off">
      <label class="user-label" for="description">Description</label>
    </div>
    <div class="modal-footer">
    <button type="submit" class="modal-footer-button" id="submit">Submit</button>
    <button type="button" class="modal-footer-button" id="cancel">Cancel</button>
    </div>
</div>
  `;
}