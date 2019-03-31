import taskData from './taskData.js';
import filterData from './filterData.js';
import Task from './task.js';
import TaskEdit from './task-edit.js';
import Filter from './filter.js';


const tasksContainer = document.querySelector(`.board__tasks`);
const filterContainer = document.querySelector(`.main__filter`);

filterContainer.innerHTML = ``;
const filterComponent = new Filter(filterData);
filterComponent.onFilter = () => {
};
filterContainer.appendChild(filterComponent.render());


let tasks = [];
for (let i = 0; i < 7; i++) {
  tasks.push(taskData());
}

const renderTasks = () => {

  tasksContainer.innerHTML = ``;

  for (const task of tasks) {
    const taskComponent = new Task(task);
    const editTaskComponent = new TaskEdit(task);


    taskComponent.onEdit = () => {
      editTaskComponent.render();
      tasksContainer.replaceChild(editTaskComponent.element, taskComponent.element);
      taskComponent.unrender();
    };

    editTaskComponent.onDelete = () => {
      tasksContainer.removeChild(editTaskComponent.element);
      editTaskComponent.unrender();
    };

    editTaskComponent.onSubmit = (newObject) => {
      task.title = newObject.title;
      task.tags = newObject.tags;
      task.mainColor = newObject.mainColor;
      task.repeatingDays = newObject.repeatingDays;
      task.dueDate = newObject.dueDate;

      taskComponent.update(task);
      taskComponent.render();
      tasksContainer.replaceChild(taskComponent.element, editTaskComponent.element);
      editTaskComponent.unrender();
    };
    tasksContainer.appendChild(taskComponent.render());
  }
};

renderTasks();
