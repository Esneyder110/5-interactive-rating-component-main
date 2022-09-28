// Seleccionar elemento

const selectElement = (selector) => {
    const element = document.querySelector(selector);
    if(element) return element;
    throw new Error(`Something went wrong! Make sure that ${selector} exists/is typed correctly.`);  
};


const rating = selectElement('.card__rating');

rating.addEventListener('click', function(e) {

    let hijos = this.children;
    let seleccionado = e.target;
    let esHijo = false;

    for (let i = 0; i < hijos.length; i++) {
     
        if (seleccionado === hijos[i]) {
            esHijo = true;
        }
    }

    if(esHijo) {

        // resetStyles()
        for (let i = 0; i < hijos.length; i++) {
          hijos[i].style.backgroundColor = 'var(--clr-dark-blue)';
        }
        
        seleccionado.style.backgroundColor = 'var(--clr-principal)';
        let myRating = seleccionado.innerText;
        actualizarRating(myRating);
    }

});


function actualizarRating(myRating) {
    const resultado = selectElement('.card__result');
    resultado.innerText = `You selected ${myRating} out of 5`;
}

// card__button

const submitBtn = selectElement('.card__button');
const cardStart = selectElement('.card.state_start');
const cardResult = selectElement('.card.state_thanks');

submitBtn.addEventListener('click', function() {
    cardStart.style.display = 'none';
    cardResult.style.display = 'grid';

});

