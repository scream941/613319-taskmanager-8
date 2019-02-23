export default (caption, count, checked = false) =>
  `<input
          type="radio"
          id="filter__${caption}"
          class="filter__input visually-hidden"
          name="filter"
          ${checked ? `checked` : ``}
        />
        <label for="filter__${caption}" class="filter__label"
          >${caption} <span class="filter__${caption}-count">${count}</span></label
        >`;
