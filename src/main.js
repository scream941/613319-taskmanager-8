import makeFilter from './make-filter.js';
import makeTask from './make-task.js';


const taskContainer = document.querySelector(`.board__tasks`);
const filterContainer = document.querySelector(`.main__filter`);


function randomNumber() {
  const number = Math.round(Math.random() * (15 - 1) + 1);
  return number;
}

const renderTasks = () => {
  taskContainer.innerHTML = ``;
  const tasks = new Array(randomNumber()).fill().map(makeTask);
  taskContainer.insertAdjacentHTML(`beforeend`, tasks.join(``));
};

filterContainer.innerHTML = ``;
filterContainer.insertAdjacentHTML(`beforeend`, makeFilter(`All`, randomNumber(), true));
filterContainer.insertAdjacentHTML(`beforeend`, makeFilter(`Overdue`, randomNumber()));
filterContainer.insertAdjacentHTML(`beforeend`, makeFilter(`Today`, randomNumber()));
filterContainer.insertAdjacentHTML(`beforeend`, makeFilter(`Favorites`, randomNumber()));
filterContainer.insertAdjacentHTML(`beforeend`, makeFilter(`Repeating`, randomNumber()));
filterContainer.insertAdjacentHTML(`beforeend`, makeFilter(`Tags`, randomNumber()));
filterContainer.insertAdjacentHTML(`beforeend`, makeFilter(`Archive`, randomNumber()));

renderTasks();


filterContainer.addEventListener(`change`, renderTasks);
