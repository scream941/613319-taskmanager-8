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
  return components.map(mapper).join(``);
};

export default (task) => `<article class="card card--blue">
  <form class="card__form" method="get">
    <div class="card__inner">
      <div class="card__control">
        <button type="button" class="card__btn card__btn--edit">
          edit
        </button>
        <button type="button" class="card__btn card__btn--archive">
          archive
        </button>
        <button
          type="button"
          class="card__btn card__btn--favorites card__btn--disabled"
        >
          favorites
        </button>
      </div>

      <div class="card__color-bar">
        <svg class="card__color-bar-wave" width="100%" height="10">
          <use xlink:href="#wave"></use>
        </svg>
      </div>

      <div class="card__textarea-wrap">
        <label>
          <textarea
            class="card__text"
            placeholder="Start typing your text here..."
            name="text"
          >${task.title}</textarea>
        </label>
      </div>

      <div class="card__settings">
        <div class="card__details">
          <div class="card__dates">
            <button class="card__date-deadline-toggle" type="button">
              date: <span class="card__date-status">no</span>
            </button>

            <fieldset class="card__date-deadline" disabled>
              <label class="card__input-deadline-wrap">
                <input
                  class="card__date"
                  type="text"
                  placeholder="23 September"
                  name="date"
                />
              </label>
              <label class="card__input-deadline-wrap">
                <input
                  class="card__time"
                  type="text"
                  placeholder="11:15 PM"
                  name="time"
                />
              </label>
            </fieldset>

            <button class="card__repeat-toggle" type="button">
              repeat:<span class="card__repeat-status">no</span>
            </button>

            <fieldset class="card__repeat-days" disabled>
              <div class="card__repeat-days-inner">
              ${makeHtml(task.repeatingDays, dayCheckbox)}
              </div>
            </fieldset>
          </div>

          <div class="card__hashtag">
            <div class="card__hashtag-list">
              ${makeHtml([...task.tags], hashtag)}
            </div>

            <label>
              <input
                type="text"
                class="card__hashtag-input"
                name="hashtag-input"
                placeholder="Type new hashtag here"
              />
            </label>
          </div>
        </div>

        <label class="card__img-wrap card__img-wrap--empty">
          <input
            type="file"
            class="card__img-input visually-hidden"
            name="img"
          />
        </label>

        <div class="card__colors-inner">
          <h3 class="card__colors-title">Color</h3>
          <div class="card__colors-wrap">
            ${makeHtml(task.color, color)}
          </div>
        </div>
      </div>

      <div class="card__status-btns">
        <button class="card__save" type="submit">save</button>
        <button class="card__delete" type="button">delete</button>
      </div>
    </div>
  </form>
</article>`;
