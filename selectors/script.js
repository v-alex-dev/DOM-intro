let important = document.getElementsByClassName('important');
let images = document.querySelectorAll('img');
let p = document.querySelectorAll('p')
for (const item of important) {
  item.innerText = 'This is an important item'; 
}

console.log(images);

for (const item of images) {
  if (item.className != 'important') {
    item.style.display = 'none';
  }
}

for (const item of p) {
  console.log(item.textContent);
  if (item.className) {
    console.log(item.className);
  }
}

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

rgb = initRgb(30);

for (const item of p) {
  color = Math.floor(Math.random()*rgb.length)
  item.style.color = rgb[color]
}