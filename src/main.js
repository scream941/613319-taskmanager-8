import makeFilter from './make-filter.js';
import makeTask from './make-task.js';

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

const renderTasks = () => {
  taskContainer.innerHTML = ``;
  const tasks = new Array(randomNumber()).fill().map(makeTask);
  taskContainer.insertAdjacentHTML(`beforeend`, tasks.join(``));
};


const renderFilters = () => {
  filterContainer.innerHTML = ``;
  filterContainer.insertAdjacentHTML(`beforeend`, filterParams.map(makeFilter).join(``));
};

renderFilters();
renderTasks();


filterContainer.addEventListener(`change`, renderTasks);
