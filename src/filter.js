import Component from './component.js';

export default class Filter extends Component {
  constructor(data) {
    super();
    this._title = data.title;
    this._count = data.count;
    this._onFilter = null;
    this._onFilterClick = this._onFilterClick.bind(this);
  }
  _onFilterClick(evt) {
    if (typeof this._onFilter === `function`) {
      this._onFilter();
    }
  }
  set onFilter(fn) {
    this._onFilter = fn;
  }
  get template() {
    return `<div class="container filter">
    ${Object.entries(this._title).map(([name, check]) => {
    return `<input type="radio" id="filter__${name}" class="filter__input visually-hidden" name="filter" ${check ? `checked` : ``}/>
            <label for="filter__${name}" class="filter__label">
              ${name} <span class="filter__${name}-count">${this._count}</span></label>`;
  }).join(``)}
    </div>`;
  }
  setListener() {
    this._element.querySelector(`.filter__input`)
      .addEventListener(`change`, this._onFilter);
  }
  removeListener() {
    this._element.querySelector(`.filter__input`)
      .removeEventListener(`change`, this._onFilter);
  }
}
