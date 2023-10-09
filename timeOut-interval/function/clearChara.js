const clearChara = () => {
    const sectionId = document.getElementById('exoOne');
    while (sectionId.childElementCount > 0){
        sectionId.firstChild.remove();
    }

}

export {clearChara};