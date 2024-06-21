// "npm run build"->"npm start" to launch html

// ==========================
// Imports and Dependencies
// ==========================

import './style.css';
import Task from './task.js';
import Project from './project.js';
import plusIcon from '../files/images/plus.png';
import sidebarProjectButtonIcon from './svgUtils.js';
import { createAddIcon } from './svgUtils.js';

// ==========================
// Constants and Variables
// ==========================

export const modal = document.getElementById("myModal");          // Exporting modal for global access in project.js
export const toggleFormCheckbox = document.getElementById('toggleForm'); // Checkbox to toggle between project/task form in modal. Exported for global access in project.js
const addBtn = document.getElementById('add-task-sidebar-button');// Add button for sidebar
const span = document.getElementsByClassName("close")[0];         // X button for modal
const form = document.getElementById('form');            // Task form inside modal
const modalTitle = document.getElementById('modal-title');        // Text for modal title
const addTaskBtn = document.getElementById('add-task-button');    // Add task button for task/project cards
const sidebarAddProjectBtn = document.getElementById('sidebar-add-project-button'); // Add project button in sidebar

// Tracks the current project for task submission
//    There was an issue where removing event listeners still wouldn't stop multiple tasks
//    from being appended, so currentProject was added to track the project currently
//    being worked on.
let currentProject = null;
let projectTodaysTasks = null;

// ==========================
// Functions
// ==========================

// Function to handle form submission
function handleTaskFormSubmit(event)
{
  event.preventDefault(); // Prevent form from submitting

  if (!currentProject) return;

  // Store values from task form and create task object
  const taskName = document.getElementById('taskName').value;
  const dueDate = document.getElementById('dueDate').value;
  const description = document.getElementById('description').value;
  const task = new Task(taskName, description, dueDate, 0);

  // Create task card
  const taskCard = task.createTaskCard();
    
  currentProject.addTask(task);
  currentProject.updateTaskDisplay();
  
  closeModal();
}

// Function to handle project form submission
function handleProjectFormSubmit(event)
{
  event.preventDefault(); // Prevent form from submitting

  // Store values from project form and create project object
  const projectName = document.getElementById('projectName').value;
  const project = new Project(projectName);

  // Create and append project card
  project.createProjectCard();
  project.appendProjectCardToDOM(modal, loadTaskForm);

  // Create and append sidebar project button
  project.createSidebarProjectBtn();
  project.appendSidebarProjectBtnToDOM();

  closeModal();
}

// Closes modal, removes event listeners from form, and resets currentProject
function closeModal() {
  modal.style.display = "none";
  form.removeEventListener('submit', handleTaskFormSubmit);
  form.removeEventListener('submit', handleProjectFormSubmit);
  currentProject = null; // Reset currentProject
}

// Open modal
function openModal() {
  modal.style.display = "block";
}

// Load project form in modal
function loadProjectForm() {
  modalTitle.textContent = "Create Project";
  form.innerHTML = `
    <div class="form-group">
      <input class="input" type="text" id="projectName" name="projectName" required="" autocomplete="off">
      <label class="user-label" for="projectName">Project Name</label>
    </div>
    <div class="modal-footer">
    <button type="submit" class="modal-footer-button" id="submit-project">Submit</button>
    <button type="button" class="modal-footer-button" id="cancel">Cancel</button>
    </div>
  `;
  form.removeEventListener('submit', handleTaskFormSubmit); // Remove previous task form listener if any
  form.addEventListener('submit', handleProjectFormSubmit); // Add project form listener
  document.getElementById('cancel').addEventListener('click', closeModal);
}

// Load task form in modal
export function loadTaskForm(project) {
  modalTitle.textContent = "Create Task";
  form.innerHTML = `
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
    <button type="submit" class="modal-footer-button" id="submit-task">Submit</button>
    <button type="button" class="modal-footer-button" id="cancel">Cancel</button>
    </div>
  `;
  form.removeEventListener('submit', handleTaskFormSubmit); // Remove previous task form listener if any
  form.addEventListener('submit', handleTaskFormSubmit); // Add task form listener
  document.getElementById('cancel').addEventListener('click', closeModal);
  currentProject = project; // Set the current project
}

// ==========================
// Event Listeners
// ==========================

// When "add task" button in sidebar is clicked
addBtn.addEventListener('click', () => {
  loadTaskForm(projectTodaysTasks);
  openModal();
});

sidebarAddProjectBtn.addEventListener('click', () => {
  loadProjectForm();
  openModal();
});

// When the user clicks on <span> (x) to close modal
span.addEventListener('click', () => {
  closeModal();
});

// When the user clicks anywhere outside of the modal
window.addEventListener('click', (event) => {
  if (event.target == modal) {
    closeModal();
  }
});

// ==========================
// Initialization
// ==========================

// Load into HTML when DOM loads
document.addEventListener('DOMContentLoaded', () => {
  // Load plus icon for "add task" button in sidebar
  const imgElement = document.getElementById('plus-icon');
  imgElement.src = plusIcon;

  // Load add icon for "add task" buttons in task cards and "add project" sidebar button
  const addIcon = createAddIcon({ width: '24px', height: '24px', color: '#2196f3', strokeWidth: 1.5 });
  sidebarAddProjectBtn.appendChild(addIcon);

  // Create and append Today's tasks project card
  projectTodaysTasks = new Project("Today's tasks");
  projectTodaysTasks.createProjectCard();
  projectTodaysTasks.appendProjectCardToDOM(modal, loadTaskForm);
  const projectContainerTodaysTasks = document.getElementById('task-container');
  projectContainerTodaysTasks.appendChild(projectTodaysTasks.projectCard);
});
