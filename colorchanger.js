document.querySelectorAll('.buttons')
const body = document.querySelector("body")
buttons.array.forEach((button) => {
    button.addeventListener('click',(e) => {
        if(e.target.id==='grey'){
            body.style.backgroundcolor=e.target.id;
        }
        if(e.target.id==='white'){
            body.style.backgroundcolor=e.target.id;
        }
        if(e.target.id==='blue'){
            body.style.backgroundcolor=e.target.id;
        }
        if(e.target.id==='yellow'){
            body.style.backgroundcolor=e.target.id;
        }
    })
});