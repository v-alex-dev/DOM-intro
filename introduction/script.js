let replaceTitle = document.title;
let titleHead = 'Modifying the DOM';


replaceTitle.textContent = titleHead;
console.log(replaceTitle);
// Init rgb() for the background color with a number different rgb
function initRgb(param) {
  let background=[];
  let rgb = []

  for (let i = 0; i < param; i++) {
    let color=[];
    for (let j = 0; j < 3; j++) {
      let randomRgb = Math.floor(Math.random()*256);
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
// Loop backgroundColor with 1 sec interval
function loop(param) {
  let index = 0;

  const intervalId = setInterval(function () {
    if (index < param.length) {
      document.body.style.backgroundColor = param[index];
      console.log(param[index]);
      index++;
    } else {
      clearInterval(intervalId); // Arrête l'intervalle une fois que toutes les couleurs ont été appliquées.
    }
  }, 1000); // Répétez la fonction toutes les 1000 millisecondes (1 seconde).
}

rgb = initRgb(10);
loop(rgb);

childrenBody = document.body.children;

for (const item of childrenBody) {
  console.log(item);
}