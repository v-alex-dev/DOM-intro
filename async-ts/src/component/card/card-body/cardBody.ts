export const cardBody = (link : string, paragraph: string) => {
  const body = document.createElement('div');
  const para = document.createElement('p');
  const img = document.createElement('img');

  para.classList.add('card-paragraph');
  img.classList.add('card-img');

  para.textContent = paragraph;
  img.src = link

  body.classList.add('card-body')

  body.appendChild(img);
  body.appendChild(para);

  return body;
}