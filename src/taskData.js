export default {
  title: [
    `Изучить теорию`,
    `Сделать домашку`,
    `Пройти интенсив на соточку`
  ][Math.floor(Math.random() * 3)],
  dueDate: Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000,
  tags: new Set([
    `cinema`,
    `entertaiment`,
    `myself`,
  ]),
  picture: `//picsum.photos/100/100?r=${Math.random()}`,
  repeatingDays: [
    {caption: `mo`, isRepeating: true},
    {caption: `tu`, isRepeating: false},
    {caption: `we`, isRepeating: true},
    {caption: `th`, isRepeating: false},
    {caption: `fr`, isRepeating: false},
    {caption: `sa`, isRepeating: true},
    {caption: `su`, isRepeating: false},
  ],
  color: [
    `black`,
    `yellow`,
    `blue`,
    `green`,
    `pink`
  ],
  isFavorite: false,
  isDone: false,
};
