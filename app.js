//Selectors
const start = document.querySelector('.button-holder');
const start2 = document.querySelector('.start-button');
const oldcontainer = document.querySelector('.container');
const newbox1 = document.querySelector('.box1');

//EventListeners
start.addEventListener('click', gamestart);
newbox1.addEventListener('click', xswitchbox);

//Functions
function gamestart(event){
    //prevent the reloading of the page
    event.preventDefault()
    //Change the class of the div container
    oldcontainer.setAttribute('class', 'gamecontainer')
    start.style.cursor = 'default'
    start.style.pointerEvents = 'default'
    start2.style.cursor = 'default'
    start2.style.pointerEvents = 'default'
}

function xswitchbox(e){
    e.preventDefault()
    if (oldcontainer.classList[0] === 'gamecontainer'){        
        newbox1.innerHTML = 'X'
        newbox1.setAttribute('class', 'xbox')
}}