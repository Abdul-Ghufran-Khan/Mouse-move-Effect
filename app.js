let bodyel = document.querySelector('body');

bodyel.addEventListener('mousemove',(e)=>{
    const xpos = e.offsetX;
    const ypos = e.offsetY;
    const spanel = document.createElement('span');
    spanel.style.left = xpos + 'px';
    spanel.style.top = ypos + 'px';
    const size = Math.random()*100;
    spanel.style.width = size + 'px'
    spanel.style.height = size  + 'px'
    bodyel.appendChild(spanel);
    setTimeout(()=>{
        spanel.remove();
    },3000)

})