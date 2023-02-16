



let teste = document.querySelector('#iniciar');
teste.addEventListener('click', ()=>{
    alert('click')
})

/**Class Humanos: Evento de click para escolher o personagem e salvar no localStorage */

let ninja = document.querySelector('#ninja');
ninja.addEventListener('click',()=>{
    localStorage.setItem('personagem', 1);
});
  
let guerreira = document.querySelector('#guerreira');
guerreira.addEventListener('click', ()=>{
    localStorage.setItem('personagem', 2);
});

let centuriao = document.querySelector('#Centuriao');
centuriao.addEventListener('click', ()=>{
    localStorage.setItem('personagem', 3);
})

let soldado = document.querySelector('#Soldado');
soldado.addEventListener('click', ()=>{
    localStorage.setItem('personagem', 4);
})
/**Class Magia: Evento de click para escolher o personagem e salvar no localStorage */

let fada = document.querySelector('#fada');
fada.addEventListener('click', ()=>{
    localStorage.setItem('personagem', 5);
})

let mago = document.querySelector('#Mago');
mago.addEventListener('click', ()=>{
    localStorage.setItem('personagem', 6);
})

let necromante = document.querySelector("#Necromante");
necromante.addEventListener("click", ()=>{
    localStorage.setItem('personagem', 7);
})

let elfo = document.querySelector('#Elfo');
elfo.addEventListener('click', ()=>{
    localStorage.setItem('personagem', 8);
})

let troll = document.querySelector('#troll');
troll.addEventListener('click', ()=>{
    localStorage.setItem('personagem', 9);
})
