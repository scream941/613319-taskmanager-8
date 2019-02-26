import makeFilter from './make-filter.js';
import makeTask from './make-task.js';


const taskContainer = document.querySelector(`.board__tasks`);
const filterContainer = document.querySelector(`.main__filter`);
const filterNames = [`All`, `Overdue`, `Today`, `Favorites`, `Repeating`, `Tags`, `Archive`];


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
  for (let i = 0; i < filterNames.length; i++) {
    if (i === 0) {
      filterContainer.insertAdjacentHTML(`beforeend`, makeFilter(`${filterNames[i]}`, randomNumber()), true);
    } else {
      filterContainer.insertAdjacentHTML(`beforeend`, makeFilter(`${filterNames[i]}`, randomNumber()));
    }
  }
};

renderFilters();
renderTasks();


filterContainer.addEventListener(`change`, renderTasks);
