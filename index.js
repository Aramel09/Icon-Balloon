

const boton = document.getElementById('boton')
let size = 50

document.onkeydown = (e) => {
    e = e ;
    if (e.key === 'ArrowUp') {
        size = size * 1.1
        document.getElementById('dragon').style.fontSize = size + 'px';
    } else if (e.key === 'ArrowDown') {
        size = size * .9
        document.getElementById('dragon').style.fontSize = size + 'px';
  }}
