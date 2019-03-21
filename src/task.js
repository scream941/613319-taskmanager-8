import Component from './component.js';

export default class Task extends Component {
  constructor(data) {
    super();
    this._title = data.title;
    this._dueDate = data.dueDate;
    this._tags = data.tags;
    this._picture = data.picture;
    this._repeatingDays = data.repeatingDays;
    this._color = data.color;
    this._mainColor = data.mainColor;
    this._onEdit = null;
    this._onEditButtonClick = this._onEditButtonClick.bind(this);
  }
  _isRepeated() {
    return Object.values(this._repeatingDays).some((day) => day === true);
  }
  _onEditButtonClick() {
    if (typeof this._onEdit === `function`) {
      this._onEdit();
    }
  }
  set onEdit(fn) {
    this._onEdit = fn;
  }
  get template() {
    return `
    <article class="card card--${this._mainColor} ${this._isRepeated() ? `card--repeat` : ``}">
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
                ${[...this._tags].map((tag) => (`
                  <span class="card__hashtag-inner">
                      <input
                        type="hidden"
                        name="hashtag"
                        value="${tag}"
                        class="card__hashtag-hidden-input"
                      />
                      <button type="button" class="card__hashtag-name">
                        #${tag}
                      </button>
                      <button type="button" class="card__hashtag-delete">
                        delete
                      </button>
                    </span>
                  `)).join(``)}
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
  update(data) {
    this._title = data.title;
    this._tags = data.tags;
    this._repeatingDays = data.repeatingDays;
    this._mainColor = data.mainColor;
  }
}
