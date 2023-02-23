

let teste = document.querySelector('#iniciar');
teste.addEventListener('click', ()=>{
    alert('Escolha seu personagem.')
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
/**Class Monstros: Evento de click para escolher o personagem e salvar no localStorage */
let troll = document.querySelector('#troll');
troll.addEventListener('click', ()=>{
    localStorage.setItem('personagem', 9);
})

let orc = document.querySelector('#orc');
orc.addEventListener('click', ()=>{
    localStorage.setItem('personagem', 10);
})

let lobisomem = document.querySelector('#lobisomem');
lobisomem.addEventListener('click', ()=>{
    localStorage.setItem('personagem', 11);
})

let orc_warrior = document.querySelector('#orc-warrior');
orc_warrior.addEventListener('click', ()=>{
    localStorage.setItem('personagem', 12);
})
/**Class Robo: Evento de click para escolher o personagem e salvar no localStorage */
let cyber_human = document.querySelector('#cyber-human');
cyber_human.addEventListener('click', ()=>{
    localStorage.setItem('personagem', 13);
})

let spider = document.querySelector('#spider');
spider.addEventListener('click', ()=>{
    localStorage.setItem('personagem', 14);
})

let war_robot = document.querySelector('#war-robot');
war_robot.addEventListener('click', ()=>{
    localStorage.setItem('personagem', 15);
})

let war_girl = document.querySelector('#war-girl');
war_girl.addEventListener('click', ()=>{
    localStorage.setItem('personagem', 16);
})