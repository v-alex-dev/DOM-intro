let article = document.querySelector('article');
let section = document.createElement('section');
let discord = [
  'Pierre',
	'Barbier Mathias',
	'Layla Richard',
	'JustineLeleu',
	'Alexandre Vens',
	'Takowski',
	'Carole Gérard',
	'Pierre Marien',
	'Virginie Dourson',
	'Lidwine carême',
	'Elisabeth L.',
	'Thomas Gomree',
	'Okly2023',
	'Robpiot',
	'Lucas Beauloi',
	'Elodie Ali',
	'Justine Frigo',
	'Antoine Lansman',
	'Mardixx',
	'Marie Tara',
	'AlexandreVDW',
	'Bastien Venturi',
	'Dorian Vanden Eynde',
	'RosalieBld',
	'Justin',
	'TimDesmet00',
	'Valentin-Lefort'];
  function randomColor(number) {
    return Math.floor(Math.random()*number)
  }
  function initRgb(param) {
    let background=[];
    let rgb = []
  
    for (let i = 0; i < param; i++) {
      let color=[];
      for (let j = 0; j < 3; j++) {
        let randomRgb = randomColor(256);
        color[j] = randomRgb;
      }
      background.push(color);
    }
    
    for (let i = 0; i < background.length; i++) {
      let item = background[i];
      rgb.push('rgb(' + item[0] + ', '+ item[1]+ ', ' + item[2] + ')');
    }
    return rgb
  }

let rgb = initRgb(25);

for (const item of discord) {
  let newP = document.createElement('p');
  let backP = newP.style.backgroundColor = rgb[randomColor(25)]
  console.log(backP);
  if (backP > 127.5) {
    newP.style.color = 'white';
  }
  let textNode = document.createTextNode(item);
  newP.appendChild(textNode);
  section.appendChild(newP);
}

article.append(section);
