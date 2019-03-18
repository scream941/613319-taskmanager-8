import makeFilter from './make-filter.js';
import {randomNumber} from './utilites.js';
import task from './taskData.js';
import Task from './task.js';
import TaskEdit from './task-edit.js';

const tasksContainer = document.querySelector(`.board__tasks`);
const filterContainer = document.querySelector(`.main__filter`);

const filterParams = [
  {caption: `All`, checked: true},
  {caption: `Overdue`},
  {caption: `Today`},
  {caption: `Favorites`},
  {caption: `Repeating`},
  {caption: `Tags`},
  {caption: `Archive`}
];

filterParams.forEach((param) => {
  param.count = randomNumber();
});

const renderFilters = () => {
  filterContainer.innerHTML = ``;
  filterContainer.insertAdjacentHTML(`beforeend`, filterParams.map(makeFilter).join(``));
};

renderFilters();

tasksContainer.innerHTML = ``;
const taskComponent = new Task(task);
const editTaskComponent = new TaskEdit(task);

tasksContainer.appendChild(taskComponent.render());

taskComponent.onEdit = () => {
  editTaskComponent.render();
  tasksContainer.replaceChild(editTaskComponent.element, taskComponent.element);
  taskComponent.unrender();
};

editTaskComponent.onSubmit = () => {
  taskComponent.render();
  tasksContainer.replaceChild(taskComponent.element, editTaskComponent.element);
  editTaskComponent.unrender();
};
