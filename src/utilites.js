const dayCheckbox = ({caption, isRepating}) => `
  <input
    class="visually-hidden card__repeat-day-input"
    type="checkbox"
    id="repeat-${caption}-5"
    name="repeat"
    value="${caption}"
    ${isRepating ? `checked` : ``}
  />
  <label class="card__repeat-day" for="repeat-${caption}-5"
    >${caption}</label
  >
  `;

const hashtag = (caption) => `<span class="card__hashtag-inner">
    <input
      type="hidden"
      name="hashtag"
      value="${caption}"
      class="card__hashtag-hidden-input"
    />
    <button type="button" class="card__hashtag-name">
      #${caption}
    </button>
    <button type="button" class="card__hashtag-delete">
      delete
    </button>
  </span>`;

const color = (caption) =>
  `<input
      type="radio"
      id="color-${caption}-5"
      class="card__color-input card__color-input--${caption} visually-hidden"
      name="color"
      value="${caption}"
    />
    <label
      for="color-${caption}-5"
      class="card__color card__color--${caption}"
      >${caption}</label
    >`;

const makeHtml = (components, mapper) => {
  return (components.map(mapper)).join(``);
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstChild;
};


export {dayCheckbox};
export {color};
export {hashtag};
export {makeHtml};
export {createElement};
