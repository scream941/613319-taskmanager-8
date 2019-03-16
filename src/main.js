import makeFilter from './make-filter.js';
import makeTask from './make-task.js';
import task from './taskData.js';
import Task from './task.js';

const taskContainer = document.querySelector(`.board__tasks`);
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

filterParams.forEach((param) => param.count = randomNumber());

function randomNumber() {
  const number = Math.round(Math.random() * (15 - 1) + 1);
  return number;
}

const renderFilters = () => {
  filterContainer.innerHTML = ``;
  filterContainer.insertAdjacentHTML(`beforeend`, filterParams.map(makeFilter).join(``));
};

renderFilters();

// const renderTasks = (dist, amount) => {
//   dist.innerHTML = ``;
//   dist.insertAdjacentHTML(`beforeend`, new Array(amount)
//     .fill(``)
//     .map(() => makeTask(getTask()))
//     .join(``));
// };
// renderTasks(taskContainer, 7);

taskContainer.innerHTML = ``;
const firstTask = new Task(task);
firstTask.render(taskContainer);


// filterContainer.addEventListener(`change`, renderTasks);
