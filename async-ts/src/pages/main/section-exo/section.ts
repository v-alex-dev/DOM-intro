import { card } from "../../../component/card/card";
import { Quote } from "../../../data/quote";

export const sectionExo = (object: Quote) => {
  const sectionExo:HTMLElement = document.createElement('section');
  sectionExo.classList.add('exo-async');
  sectionExo.id = 'section-exo';

  
  const cardHtml = card(object);
  sectionExo.appendChild(cardHtml);

  return sectionExo
}