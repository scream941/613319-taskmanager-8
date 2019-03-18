import {dayCheckbox, color, hashtag, makeHtml, createElement} from './utilites.js';

export default class TaskEdit {
  constructor(data) {
    this._title = data.title;
    this._dueDate = data.dueDate;
    this._tags = data.tags;
    this._picture = data.picture;
    this._repeatingDays = data.repeatingDays;
    this._color = data.color;

    this._element = null;
    this._onSubmit = null;
    this._state = {
    };
    this._onSubmitButtonClick = this._onSubmitButtonClick.bind(this);
  }
  _isRepeated() {
    return Object.values(this._repeatingDays).some((it) => it.isRepeating === true);
  }

  _onSubmitButtonClick(evt) {
    evt.preventDefault();
    typeof this._onSubmit === `function` && this._onSubmit();
  }
  set onSubmit(fn) {
    this._onSubmit = fn;
  }
  get element() {
    return this._element;
  }

  get template() {
    return `
    <article class="card card--edit card--blue ${this._isRepeated() ? `card--repeat` : ``}">
      <form class="card__form" method="get">
        <div class="card__inner">
          <div class="card__control">
            <button type="button" class="card__btn card__btn--edit">edit</button>
            <button type="button" class="card__btn card__btn--archive">archive</button>
            <button type="button" class="card__btn card__btn--favorites card__btn--disabled">favorites</button>
          </div>

          <div class="card__color-bar">
            <svg class="card__color-bar-wave" width="100%" height="10">
              <use xlink:href="#wave"></use>
            </svg>
          </div>

          <div class="card__textarea-wrap">
            <label>
              <textarea class="card__text" placeholder="Start typing your text here..." name="text">${this._title}</textarea>
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
                    <input class="card__date" type="text" placeholder="23 September" name="date" />
                  </label>

                  <label class="card__input-deadline-wrap">
                    <input class="card__time" type="text" placeholder="11:15 PM" name="time" />
                  </label>
                </fieldset>

                <button class="card__repeat-toggle" type="button">
                  repeat: <span class="card__repeat-status">no</span>
                </button>

                <fieldset class="card__repeat-days" disabled>
                  <div class="card__repeat-days-inner">
                  ${makeHtml(this._repeatingDays, dayCheckbox)}
                  </div>
                </fieldset>
              </div>

              <div class="card__hashtag">
                <div class="card__hashtag-list">
                  ${makeHtml([...this._tags], hashtag)}
                </div>

                <label>
                  <input type="text" class="card__hashtag-input" name="hashtag-input" placeholder="Type new hashtag here" />
                </label>
              </div>
            </div>

            <label class="card__img-wrap card__img-wrap--empty">
              <input type="file" class="card__img-input visually-hidden" name="img" />
            </label>

            <div class="card__colors-inner">
              <h3 class="card__colors-title">Color</h3>
              <div class="card__colors-wrap">
              ${makeHtml(this._color, color)}
              </div>
            </div>
          </div>

          <div class="card__status-btns">
            <button class="card__save" type="submit">save</button>
            <button class="card__delete" type="button">delete</button>
          </div>
        </div>
      </form>
    </article>`.trim();
  }

  setListener() {
    this._element.querySelector(`.card__btn--edit`)
    .addEventListener(`click`, this._onEditButtonClick);
  }

  removeListener() {
    this._element.querySelector(`.card__btn--edit`)
    .removeEventListener(`click`, this._onEditButtonClick);
  }

  render(container) {
    this._element = createElement(this.template);
    this.setListener();
    return this._element;
  }
  unrender() {
    this.removeListener();
    this._element = null;
  }
}
