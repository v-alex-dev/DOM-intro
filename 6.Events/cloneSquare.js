const cloneSquare = (e) =>{
    const section = document.querySelector('.displayedsquare')
    section.appendChild(e.target.cloneNode());
}

export {cloneSquare};