const minuteDisplay = () =>{
    let time  = 0;
    const sectionId = document.getElementById('exoTwo')

    setInterval(() =>{
        time++
        const minute = time/60;
        if(time%60 === 0){
            const para = document.createElement('p')
            para.textContent = `${minute} minute have passed.`;
            sectionId.appendChild(para);
            setTimeout(() =>{
                sectionId.firstChild.remove()
            },10000)
        }
    },1000)

}

export {minuteDisplay};