import { cardStyle } from '../style/cardStyle.js';
import {caracCard} from './carac-card/caracteris-card.js'

export const newCard = (name,raceCarac, classeCarac, lvl, carac, vie, mana) => {
  const section = document.getElementById('first-exo')
  // card
  const article = document.createElement('article');
  article.id = 'card'

  

  //=====================
  // header card
  const cardHeader = document.createElement('div');
  cardHeader.id = 'card-header'
  // title - header
  const title = document.createElement('h2');
  title.id = 'card-header-title';
  title.textContent = name

  // info race/classe/niv
  const divBadges = document.createElement('div');
  divBadges.id = 'badges'
  const race = document.createElement('span');
  race.id = 'badge-race';
  race.textContent = `Race : ${raceCarac}`
  const classe = document.createElement('span');
  classe.id = 'badge-classe';
  classe.textContent = `Classe : ${classeCarac}`
  const niveau = document.createElement('span');
  niveau.id ='badge-niveau';
  niveau.textContent = `Level : ${lvl}`;

  // Div barre mana & vie (Linear gradient)
  const barreMana = document.createElement('div');
  barreMana.id = 'barreMana';
  barreMana.textContent = `Mana : ${mana}`
  const barreVie = document.createElement('div');
  barreVie.id = 'barreVie';
  barreVie.textContent = `Vie : ${vie}`
  //====================

  // body card
  const cardBody = document.createElement('div');
  cardBody.id = "card-body"
  
  //====================
  // AppendChild
  article.appendChild(cardHeader);
  article.appendChild(cardBody)
  
  // header card
  cardHeader.appendChild(title)
  cardHeader.appendChild(divBadges);
  cardHeader.appendChild(barreVie);
  cardHeader.appendChild(barreMana);
  
  //Badges 
  divBadges.appendChild(race);
  divBadges.appendChild(classe);
  divBadges.appendChild(niveau);
  
  // add caract element & add in cardBordy
  caracCard(cardBody, carac);

  section.appendChild(article);
  //style

  cardStyle(vie, mana);
 };