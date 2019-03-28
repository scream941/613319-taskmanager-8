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
    return `
    ${Object.entries(this._title).map((filter) => {
    const filterName = filter[0];
    const filterCheck = filter[1];
    return `<input type="radio" id="filter__${filterName}" class="filter__input
      visually-hidden" name="filter" ${filterCheck ? `checked` : ``}/>
            <label for="filter__${filterName}" class="filter__label">
            ${filterName}
            <span class="filter__${filterName}-count">${this._count}</span>
            </label>
      `;
  }).join(``)}
    `;
  }
}
