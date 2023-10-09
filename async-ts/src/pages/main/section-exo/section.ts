import { btn } from "../../../component/btn/btn";
import { card } from "../../../component/card/card";
import { getAll } from "../../../function/getAllApi";

export const sectionExo = () => {
  const sectionExo:HTMLElement = document.createElement('section');
  sectionExo.classList.add('exo-async', 'flex', 'flex-col', 'justify-center');
  sectionExo.id = 'section-exo';
  
  const btnAdd = btn('test');
  btnAdd.textContent = 'add article'
  btnAdd.addEventListener('click', () => {
    const response = getAll();

    response.then(data => {
      const cardHtml =  card(data);
      sectionExo.appendChild(cardHtml);
    })
  })

  sectionExo.append(btnAdd);

  return sectionExo
}