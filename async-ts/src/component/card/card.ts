import { Quote } from "../../data/quote";
import { cardBody } from "./card-body/cardBody";
import { cardFooter } from "./card-footer/cardFooter";
import { cardHeader } from "./card-header/cardHeader";


export const card = (object: Quote) => {
  const card : HTMLElement  = document.createElement('article');
  card.classList.add('card')
  card.id = 'card-exo';

  const author = object.author;
  const paragraph = object.quote;
  const link = object.photo
  const permaLink = object.permalink;

  const body = cardBody(link, paragraph);
  const header = cardHeader(author);
  const footer = cardFooter(permaLink, author);
  card.appendChild(header);
  card.appendChild(body);
  card.appendChild(footer);

  return card
}