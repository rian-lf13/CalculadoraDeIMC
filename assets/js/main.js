const form= document.querySelector('#form');

form.addEventListener('submit', function(event){
    event.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso){
        setResult('Peso inválido.', false);
        return;
    }

    if(!altura){
        setResult('Altura inválida.', false);
        return;
    }
    
    const a
});

function criaP(){
    const p =document.createElement('p');
    return p;
}

function setResult(msg, isValid){
    const resultado= document.querySelector('#result');
    resultado.innerHTML = '';
    
    const p= criaP();

}
