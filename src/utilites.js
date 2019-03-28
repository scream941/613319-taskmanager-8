const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstChild;
};

const randomNumber = () => Math.round(Math.random() * (15 - 1) + 1);


export {createElement, randomNumber};
