import {cloneSquare} from "./cloneSquare.js";

const _initTime = Date.now()
const body = document.body;
const listHtml = document.querySelector('ul');
const newSquare = document.querySelector('.displayedsquare-wrapper')
const newDiv = document.createElement('div')
newDiv.className = 'displayedsquare'
newSquare.appendChild(newDiv);
const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'

}
const spaceBarLog = (e) => {
  const itemList = document.createElement('li');
  itemList.innerHTML = `[${getElapsedTime()}] You press spacebar`
  listHtml.appendChild(itemList);
}
const clickOnSquare = (e) => {
  const itemList = document.createElement('li');
  itemList.innerHTML = `[${getElapsedTime()}] create a new square`
  listHtml.appendChild(itemList);
}

const clickNewSquare = (e) =>{
  alert(e.target.classList[1])
}
const backColor = () => {
  const backgroundColor = () => {

    const color = [];
    let rgbColor ='';

    for(let i = 0; i < 3; i++){
      const rand = Math.floor(Math.random()*256);
      color.push(`${rand}`)
    }
    rgbColor = 'rgb('+ color[0] + ',' + color[1] + ',' + color[2] +')'
    return body.style.backgroundColor = rgbColor;
  }
  const body = document.body;


  body.addEventListener("keypress", (e) => {
    if(e.key === ' '){
      backgroundColor();
      spaceBarLog();
    }
  })
}
const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare);
  actionSquare.addEventListener('click', cloneSquare);

}
const square = document.querySelectorAll('.displayedsquare');


for (let newSquareElement of square) {
  newSquareElement.addEventListener('click',clickNewSquare)
}

body.addEventListener('keypress', e => {
  if(e.key === 'i'){
    const list = listHtml.children;
    while (list.length > 0){
      listHtml.removeChild(listHtml.firstChild);
    }
  }
})

body.addEventListener('keypress', e => {
  if(e.key === 's'){
    const list = newDiv.children
    while (list.length > 0){
      newDiv.removeChild(newDiv.firstChild);
    }
  }
})
backColor();
