



let teste = document.querySelector('#iniciar');
teste.addEventListener('click', ()=>{
    alert('click')
})


let ninja = document.querySelector('#ninja');
ninja.addEventListener('click',()=>{
    localStorage.setItem('personagem', 1);
});
  
let guerreira = document.querySelector('#guerreira');
guerreira.addEventListener('click', ()=>{
    localStorage.setItem('personagem', 2)
});

let centuriao = document.querySelector('#Centuriao');
centuriao.addEventListener('click', ()=>{
    localStorage.setItem('personagem', 3)
})

let soldado = document.querySelector('#Soldado');
alert(soldado.innerHTML)
soldado.addEventListener('click', ()=>{
    localStorage.setItem('personagem', 4)
})
