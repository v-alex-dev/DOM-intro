import { styleSection, styleSectionId } from './public/javascript/components/addStyleSection.js'
import { newCard } from './public/javascript/components/card.js';
import { fetchCaracter } from './public/javascript/function/getCharacter.js'



styleSection()
styleSectionId('first-exo')
fetchCaracter()
  .then((data) => {

    newCard(data.nom, data.race, data.classe, data.niveau, data.caracteristiques, data.points_de_vie, data.points_de_mana)
  })
  .catch((error) => {
    console.error(error);
  });
