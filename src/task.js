import {dayCheckbox, color, hashtag, makeHtml, createElement} from './utilites.js';

export default class Task {
  constructor(data) {
    this._title = data.title;
    this._dueDate = data.dueDate;
    this._tags = data.tags;
    this._picture = data.picture;
    this._repeatingDays = data.repeatingDays;
    this._color = data.color;

    this._element = null;
    this._state = {
    };
    this._onEditButtonClick = this._onEditButtonClick.bind(this);
  }
  _isRepeated() {
    return Object.values(this._repeatingDays).some((it) => it.isRepeating === true);
  }
  _onEditButtonClick() {
    typeof this._onEdit === `function` && this._onEdit();
  }
  get element() {
    return this._element;
  }
  set onEdit(fn) {
    this._onEdit = fn;
  }

  get template() {
    return `
    <article class="card card--blue ${this._isRepeated() ? `card--repeat` : ``}">
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
              <div class="card__hashtag">
                <div class="card__hashtag-list">
                  ${makeHtml([...this._tags], hashtag)}
                </div>
              </div>
            </div>
          </div>
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

  render() {
    this._element = createElement(this.template);
    this.setListener();
    return this._element;
  }
  unrender() {
    this.removeListener();
    this._element = null;
  }
}
