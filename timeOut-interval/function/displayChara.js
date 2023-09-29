const displayChara = (item) => {
    const sectionId = document.getElementById('exoOne');
    let i = 0;

    const intervalId = setInterval(() => {
        if (i < item.length && item) {
            const para = document.createElement('p');
            para.textContent = item[i];
            sectionId.appendChild(para);
            i++;
        } else {
            clearInterval(intervalId);
        }
    }, 1000);
}

export {displayChara};