
const personagens = [
    {nome: 'Ninja', ataque: 4, defesa: 1, agilidade: 5, vida: 100, habilidade: 3, img: '../IMG/Escolidos/Humanos/guereira -1/woman-g0828c2281_640.png'},
    {nome: 'Guerreira', ataque: 4, defesa: 2, agilidade: 4, vida: 100, habilidade: 3, img: '../IMG/Escolidos/Humanos/guereira-2/woman-g2bb09a1f3_640.png'},
    {nome: 'Centurião', ataque: 3, defesa: 5, agilidade: 2, vida: 100, habilidade: 3, img: '../IMG/Escolidos/Humanos/soldado1/soldier-g795232a97_640.png'},
    {nome: 'Soldado', ataque: 5, defesa: 1, agilidade: 4, vida: 100, habilidade: 3, img: '../IMG/Escolidos/Humanos/Soldado/soldier-5834338_1280.webp'},
    {nome: 'Fada', ataque: 3, defesa: 2, agilidade: 5, vida: 150, habilidade: 2, img: '../IMG/Escolidos/Magia/fada-1/fae-g16502d170_640.png'},
    {nome: 'Mago', ataque: 5, defesa: 3, agilidade: 2, vida: 150, habilidade: 2, img: '../IMG/Escolidos/Magia/mago-1/mag2.png'},
    {nome: 'Necromante', ataque: 5, defesa: 1, agilidade: 4, vida: 150, habilidade: 2, img: '../IMG/Escolidos/Magia/Necromante-2/necromante2.png'},
    {nome: 'Elfo', ataque: 2, defesa: 3, agilidade: 5, vida: 150, habilidade: 2, img: '../IMG/Escolidos/Magia/elfo-1/elf-g57c087640_640.png'},
    {nome: 'Troll', ataque: 8, defesa: 1, agilidade: 1, vida: 100, habilidade: 2, img: '../IMG/Escolidos/Monstros/troll-1/say-shape-gc8bd03ddf_640.png'},
    {nome: 'Orc', ataque: 6, defesa: 1, agilidade: 3, vida: 100, habilidade: 2, img: '../IMG/Escolidos/Monstros/orc-3/fantasy-g92bd20ab1_640.png'},
    {nome: 'Lobisomem', ataque: 4, defesa: 1, agilidade: 5, vida: 100, habilidade: 2, img: '../IMG/Escolidos/Monstros/Lobisomem/background-invertido.png'},
    {nome: 'Orc Warrior', ataque: 7, defesa: 1, agilidade: 2, vida: 100, habilidade: 2, img: '../IMG/Escolidos/Monstros/Orc-4/character-g573466fa9_640.png'},
    {nome: 'Cyber Human', ataque: 9, defesa: 9, agilidade: 2, vida: 100, habilidade: 1, img: '../IMG/Escolidos/Robos/man/man-gb5e8a07f7_640.png'},
    {nome: 'Spider', ataque: 9, defesa: 7, agilidade: 4, vida: 100, habilidade: 1, img: '../IMG/Escolidos/Robos/spider/spider-invertido.png'},
    {nome: 'War Robot', ataque: 13, defesa: 10, agilidade: 0, vida: 100, habilidade: 1, img: '../IMG/Escolidos/Robos/war-robot/robot-g6099450fc_640.png'},
    {nome: 'War Girl', ataque: 10, defesa: 7, agilidade: 3, vida: 100, habilidade: 1, img: '../IMG/Escolidos/Robos/girl/robot-g542a0cd8c_640 (cópia).png'},
]


let arrPersonagens = [];
let container = document.querySelector('.personagens');
personagens.forEach((personagem)=>{

    let pers;
    pers = `<div class="container-tamanho">
                                <img src="${personagem.img}" alt="" class="img">
                                <h2>${personagem.nome}</h2>
                                    <ul>
                                        <li>Ataque: <span> ${personagem.ataque}</span></li>
                                        <li>Defesa: <span> ${personagem.defesa}</span></li>
                                        <li>Agilidade: <span> ${personagem.agilidade}</span></li>
                                        <li>Vida: <span> ${personagem.vida}</span></li>
                                        <li>Habilidade: <span> ${personagem.habilidade}</span></li>
                                    </ul>
                            </div>`;
    arrPersonagens.push(pers);
})

let personagensHTML = arrPersonagens.join('');
container.innerHTML = personagensHTML;

let corpo = document.querySelector('body');
let tema = document.querySelector('#tema-dark');
tema.addEventListener('click', ()=> {
    
    if(corpo.style.backgroundColor != 'black'){
        corpo.style.backgroundColor = 'black';
        tema.innerHTML = 'Tema claro'
        tema.style.color = 'white'
    }else{
        corpo.style.backgroundColor = 'white';
        tema.innerHTML = 'Tema Dark'
    }
})