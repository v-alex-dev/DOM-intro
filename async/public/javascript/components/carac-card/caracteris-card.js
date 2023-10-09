export const caracCard = (element, object) => {
  const items = Object.keys(object);

  items.forEach((item) => {
    const div = document.createElement('div');
    div.id = 'card-body-carac';

    const title = document.createElement('h3');
    title.textContent = item;
    title.id = item;

    div.appendChild(title);

    const parag = document.createElement('p');
    parag.textContent = object[item];

    div.appendChild(parag);

    element.appendChild(div);
  });
};