
const personagens2 = [
    {nome: 'Ninja', ataque: 4, defesa: 1, agilidade: 5, vida: 100, habilidade: 3},
    {nome: 'Guerreira', ataque: 4, defesa: 2, agilidade: 4, vida: 100, habilidade: 3},
    {nome: 'Centurião', ataque: 3, defesa: 5, agilidade: 2, vida: 100, habilidade: 3},
    {nome: 'Soldado', ataque: 5, defesa: 1, agilidade: 4, vida: 100, habilidade: 3},
    {nome: 'Fada', ataque: 3, defesa: 2, agilidade: 5, vida: 150, habilidade: 2},
    {nome: 'Mago', ataque: 5, defesa: 3, agilidade: 2, vida: 150, habilidade: 2},
    {nome: 'Necromante', ataque: 5, defesa: 1, agilidade: 4, vida: 150, habilidade: 2},
    {nome: 'Elfo', ataque: 2, defesa: 3, agilidade: 5, vida: 150, habilidade: 2},
    {nome: 'Troll', ataque: 8, defesa: 1, agilidade: 1, vida: 100, habilidade: 2},
    {nome: 'Orc', ataque: 6, defesa: 1, agilidade: 3, vida: 100, habilidade: 2},
    {nome: 'Lobisomem', ataque: 4, defesa: 1, agilidade: 5, vida: 100, habilidade: 2},
    {nome: 'Orc Warrior', ataque: 7, defesa: 1, agilidade: 2, vida: 100, habilidade: 2},
    {nome: 'Cyber Human', ataque: 9, defesa: 9, agilidade: 2, vida: 100, habilidade: 1},
    {nome: 'Spider', ataque: 9, defesa: 7, agilidade: 4, vida: 100, habilidade: 1},
    {nome: 'War Robot', ataque: 13, defesa: 10, agilidade: 0, vida: 100, habilidade: 1},
    {nome: 'War Girl', ataque: 10, defesa: 7, agilidade: 3, vida: 100, habilidade: 1},
]
/**
 * 10 --- 100
 * 15 --- 150
 * 
 */

function ataque(ataque, agilidade, habilidade, nomeDoJogador ){
    let dados = habilidade * 6;
    let habilidade_p;
    let ataq = document.querySelector('.espada');
    ataq.addEventListener('click', ()=>{
        habilidade_p = Math.floor(Math.random() * (dados - 1 + 1) + 1);

        let ataque_p = ataque + habilidade_p;
        let atacandoCom = document.querySelector(nomeDoJogador);//'#atacando-1' ou '#atacando-2'
    
        localStorage.setItem('#atacando-2', ataque_p);
        atacandoCom.innerText = ataque_p;
        return ataque_p;
    })


}

function defesa(defesa, agilidade, habilidade, nomeDoJogador){
    let ataq = document.querySelector('.espada');
    ataq.addEventListener('click', ()=>{
        let dados = habilidade * 6;
        let habilidade_p2 = Math.floor(Math.random() * (dados - 1 + 1) + 1);
        let defesa_p = defesa + habilidade_p2;

            let defendendoCom = document.querySelector(nomeDoJogador);//'#defendendo-2'
            defendendoCom.innerText = defesa_p;
            localStorage.setItem('#defesa_p2', defesa_p);
            return defesa_p;
    })
}

function nomeVida(nomeJogador, vida){
    let life = vida;
    let ataqueDaDeP1;
    let defesaDeP2;
    let porcentagem = 0;
        porcentagem += (10 * vida) / 100;

    let ataq = document.querySelector('.espada');
    ataq.addEventListener('click', ()=>{
        let nome = document.querySelector('#nome-jogador2');
        let vidaJogador2 = document.querySelector('#vida-p2');

        ataqueDaDeP1 = Number(localStorage.getItem('#atacando_p1'));
        defesaDeP2 = Number(localStorage.getItem('#defesa_p2'));

        let dano = defesaDeP2 - ataqueDaDeP1;

        if(defesaDeP2 > ataqueDaDeP1){
            life += dano;
        }
        if(defesaDeP2 <= ataqueDaDeP1){
            life += dano;
        }
    
        nome.innerText = nomeJogador;
        vidaJogador2.innerText = life;
        
    })
   

    

    vida = life / 10;

    porcentagem += vida;//somar ou dimiuir
    vidaJogador2.style.maxWidth = `${porcentagem}vw`;

    dano = 0;

    return life;
}

function atributosDojogador(ata, def, agi, hab, ataque_, defesa_, agilidade_, habilidade_){/*, '#ataque-2', '#defesa-2', '#agilidade-2', '#habilidade-2'*/
    let ataque = document.querySelector(ataque_);
    ataque.innerText = ata;
    let defesa = document.querySelector(defesa_);
    defesa.innerText = def;
    let agilidade = document.querySelector(agilidade_);
    agilidade.innerText = agi;
    let habilidade = document.querySelector(habilidade_);
    habilidade.innerText = hab;
}
let containerJogador2 = document.querySelector('.container-jogador2');
let img = document.querySelector('#img-jogador2');
let personagem_jogador2;

function escolheOrdemDosPersonagens(){
    let arrPersonagens = [];
    let ordemPersonagem;
 
    let limite = 0;
    while(limite < 16){
    ordemPersonagem = Math.floor(Math.random() * (16 - 1 + 1) + 1);
    let personagem = ordemPersonagem;

    if(!arrPersonagens.includes(personagem)){
            arrPersonagens.push(personagem)
    }
    limite = arrPersonagens.length;
    }

    return arrPersonagens;
}

let oponente = escolheOrdemDosPersonagens();
personagem_jogador2 = 1;
switch(personagem_jogador2){
    case 1:
            atributosDojogador(personagens2[0].ataque, personagens2[0].defesa, personagens2[0].agilidade, personagens2[0].habilidade, '#ataque-2', '#defesa-2', '#agilidade-2', '#habilidade-2');
            img.src = '../IMG/Escolidos/Humanos/guereira -1/woman-g9050d3316_640.png';
            img.style.transform = 'scaleX(-1)';
            
            defesa(personagens2[0].defesa, personagens2[0].agilidade, personagens2[0].habilidade, '#defendendo-2');
            ataque(personagens2[0].ataque, personagens2[0].agilidade, personagens2[0].habilidade, '#atacando-2');
            nomeVida(personagens2[0].nome, personagens2[0].vida);
          
        
    break;
    case 2:
        atributosDojogador(personagens2[1].ataque, personagens2[1].defesa, personagens2[1].agilidade, personagens2[1].habilidade, '#ataque-2', '#defesa-2', '#agilidade-2', '#habilidade-2');
        img.src = '../IMG/Escolidos/Humanos/guereira-2/woman-cortada.png';
        img.style.transform = 'scaleX(-1)';
        img.setAttribute('id', 'guerreira-img');
        nomeVida(personagens2[1].nome, personagens2[1].vida)
        ataque(personagens2[1].ataque, personagens2[1].agilidade, personagens2[1].habilidade, '#atacando-2');
        defesa(personagens2[1].defesa, personagens2[1].agilidade, personagens2[1].habilidade, '#defendendo-2');
    break;
    case 3:
        atributosDojogador(personagens2[2].ataque, personagens2[2].defesa, personagens2[2].agilidade, personagens2[2].habilidade, '#ataque-2', '#defesa-2', '#agilidade-2', '#habilidade-2'); 
        img.src = '../IMG/Escolidos/Humanos/soldado1/soldier-gdd3037155_640.png';
        img.style.transform = 'scaleX(-1)';
        img.setAttribute('id', 'centuriao-img');
        nomeVida(personagens2[2].nome, personagens2[2].vida);
        ataque(personagens2[2].ataque, personagens2[2].agilidade, personagens2[2].habilidade, '#atacando-2');
        defesa(personagens2[2].defesa, personagens2[2].agilidade, personagens2[2].habilidade, '#defendendo-2');
    break;
    case 4: 
    atributosDojogador(personagens2[3].ataque, personagens2[3].defesa, personagens2[3].agilidade, personagens2[3].habilidade, '#ataque-2', '#defesa-2', '#agilidade-2', '#habilidade-2');
        img.src = '../IMG/Escolidos/Humanos/Soldado/soldier.png';
        img.style.transform = 'scaleX(-1)';
        img.setAttribute('id', 'soldado-img');
        nomeVida(personagens2[3].nome, personagens2[3].vida);
        ataque(personagens2[3].ataque, personagens2[3].agilidade, personagens2[3].habilidade, '#atacando-2');
        defesa(personagens2[3].defesa, personagens2[3].agilidade, personagens2[3].habilidade, '#defendendo-2');
    break;
    case 5:
        atributosDojogador(personagens2[4].ataque, personagens2[4].defesa, personagens2[4].agilidade, personagens2[4].habilidade, '#ataque-2', '#defesa-2', '#agilidade-2', '#habilidade-2');
        img.src = '../IMG/Escolidos/Magia/fada-1/fae-g16502d170_640.png';
        nomeVida(personagens2[4].nome, personagens2[4].vida);
        ataque(personagens2[4].ataque, personagens2[4].agilidade, personagens2[4].habilidade, '#atacando-2');
        defesa(personagens2[4].defesa, personagens2[4].agilidade, personagens2[4].habilidade, '#defendendo-2');
        break;
    case 6:
        atributosDojogador(personagens2[5].ataque, personagens2[5].defesa, personagens2[5].agilidade, personagens2[5].habilidade,'#ataque-2', '#defesa-2', '#agilidade-2', '#habilidade-2');
        img.src = '../IMG/Escolidos/Magia/mago-1/mag.png';
        img.setAttribute('id', 'mago-img');
        img.style.transform = 'scaleX(-1)';
        nomeVida(personagens2[5].nome, personagens2[5].vida);
        ataque(personagens2[5].ataque, personagens2[5].agilidade, personagens2[5].habilidade, '#atacando-2');
        defesa(personagens2[5].defesa, personagens2[5].agilidade, personagens2[5].habilidade, '#defendendo-2');
        break;
    case 7: 
    atributosDojogador(personagens2[6].ataque, personagens2[6].defesa, personagens2[6].agilidade, personagens2[6].habilidade, '#ataque-2', '#defesa-2', '#agilidade-2', '#habilidade-2');
        img.src = '../IMG/Escolidos/Magia/Necromante-2/magic.png';
        img.setAttribute('id', 'necromante-img');
        img.style.transform = 'scaleX(-1)'
        nomeVida(personagens2[6].nome, personagens2[6].vida);
        ataque(personagens2[6].ataque, personagens2[6].agilidade, personagens2[6].habilidade, '#atacando-2');
        defesa(personagens2[6].defesa, personagens2[6].agilidade, personagens2[6].habilidade, '#defendendo-2');
        break;
    case 8:
        atributosDojogador(personagens2[7].ataque, personagens2[7].defesa, personagens2[7].agilidade, personagens2[7].habilidade, '#ataque-2', '#defesa-2', '#agilidade-2', '#habilidade-2');
        img.src = '../IMG/Escolidos/Magia/elfo-1/elf-gebe17eae2_640.png';
        img.setAttribute('id', 'elfo-img-jogador2');
        nomeVida(personagens2[7].nome, personagens2[7].vida);
        ataque(personagens2[7].ataque, personagens2[7].agilidade, personagens2[7].habilidade, '#atacando-2');
        defesa(personagens2[7].defesa, personagens2[7].agilidade, personagens2[7].habilidade, '#defendendo-2');
        break;
    case 9:
        atributosDojogador(personagens2[8].ataque, personagens2[8].defesa, personagens2[8].agilidade, personagens2[8].habilidade, '#ataque-2', '#defesa-2', '#agilidade-2', '#habilidade-2');
        img.src = '../IMG/Escolidos/Monstros/troll-1/say-shape-g4e412b45c_640.png';
        img.setAttribute('id', 'troll-img');
        img.style.transform = 'scaleX(-1)';
        nomeVida(personagens2[8].nome, personagens2[8].vida)
        ataque(personagens2[8].ataque, personagens2[8].agilidade, personagens2[8].habilidade, '#atacando-2');
        defesa(personagens2[8].defesa, personagens2[8].agilidade, personagens2[8].habilidade, '#defendendo-2');
        break
    case 10:
        atributosDojogador(personagens2[9].ataque, personagens2[9].defesa, personagens2[9].agilidade, personagens2[9].habilidade, '#ataque-2', '#defesa-2', '#agilidade-2', '#habilidade-2');
        img.src = '../IMG/Escolidos/Monstros/orc-3/fantasy-g92bd20ab1_640.png';
        img.setAttribute('id', 'orc-img');
        img.style.transform = 'scaleX(-1)';
        nomeVida(personagens2[9].nome, personagens2[9].vida);
        ataque(personagens2[9].ataque, personagens2[9].agilidade, personagens2[9].habilidade, '#atacando-2');
        defesa(personagens2[9].defesa, personagens2[9].agilidade, personagens2[9].habilidade, '#defendendo-2');
        break;
    case 11:
        atributosDojogador(personagens2[10].ataque, personagens2[10].defesa, personagens2[10].agilidade, personagens2[10].habilidade, '#ataque-2', '#defesa-2', '#agilidade-2', '#habilidade-2');
        img.src = '../IMG/Escolidos/Monstros/Lobisomem/background-invertido.png';
        img.setAttribute('id', 'lobisomem-img')
        img.style.transform = 'scaleX(-1)';
        nomeVida(personagens2[10].nome, personagens2[10].vida);
        ataque(personagens2[10].ataque, personagens2[10].agilidade, personagens2[10].habilidade, '#atacando-2');
        defesa(personagens2[10].defesa, personagens2[10].agilidade, personagens2[10].habilidade, '#defendendo-2');
        break;
    case 12:
        atributosDojogador(personagens2[11].ataque, personagens2[11].defesa, personagens2[11].agilidade, personagens2[11].habilidade, '#ataque-2', '#defesa-2', '#agilidade-2', '#habilidade-2');
        img.src = '../IMG/Escolidos/Monstros/Orc-4/character-invertido.png';
        img.setAttribute('id', 'orc-warrior-img');
        nomeVida(personagens2[11].nome, personagens2[11].vida);
        ataque(personagens2[11].ataque, personagens2[11].agilidade, personagens2[11].habilidade, '#atacando-2');
        defesa(personagens2[11].defesa, personagens2[11].agilidade, personagens2[11].habilidade, '#defendendo-2');
        break;
    case 13:
        atributosDojogador(personagens2[12].ataque, personagens2[12].defesa, personagens2[12].agilidade, personagens2[12].habilidade, '#ataque-2', '#defesa-2', '#agilidade-2', '#habilidade-2');
        img.src = '../IMG/Escolidos/Robos/man/man-g5c3d16830_640.png';
        img.setAttribute('id', 'cyber-human-img');
        img.style.transform = 'scaleX(-1)';
        nomeVida(personagens2[12].nome, personagens2[12].vida);
        ataque(personagens2[12].ataque, personagens2[12].agilidade, personagens2[12].habilidade, '#atacando-2');
        defesa(personagens2[12].defesa, personagens2[12].agilidade, personagens2[12].habilidade, '#defendendo-2');
    break;
    case 14:
        atributosDojogador(personagens2[13].ataque, personagens2[13].defesa, personagens2[13].agilidade, personagens2[13].habilidade, '#ataque-2', '#defesa-2', '#agilidade-2', '#habilidade-2');
        img.src = '../IMG/Escolidos/Robos/spider/spider-invertido.png';
        img.setAttribute('id', 'spider-img');
        img.style.transform = 'scaleX(-1)';
        nomeVida(personagens2[13].nome, personagens2[13].vida);
        ataque(personagens2[13].ataque, personagens2[13].agilidade, personagens2[13].habilidade, '#atacando-2');
        defesa(personagens2[13].defesa, personagens2[13].agilidade, personagens2[13].habilidade, '#defendendo-2');
        break;
    case 15:
        atributosDojogador(personagens2[14].ataque, personagens2[14].defesa, personagens2[14].agilidade, personagens2[14].habilidade, '#ataque-2', '#defesa-2', '#agilidade-2', '#habilidade-2');
        img.src = '../IMG/Escolidos/Robos/war-robot/robot-d.png';
        img.setAttribute('id', 'war-robot-img');
        nomeVida(personagens2[14].nome, personagens2[14].vida);
        ataque(personagens2[14].ataque, personagens2[14].agilidade, personagens2[14].habilidade, '#atacando-2');
        defesa(personagens2[14].defesa, personagens2[14].agilidade, personagens2[14].habilidade, '#defendendo-2');
        break;
    case 16:
        atributosDojogador(personagens2[15].ataque, personagens2[15].defesa, personagens2[15].agilidade, personagens2[15].habilidade, '#ataque-2', '#defesa-2', '#agilidade-2', '#habilidade-2');
        img.src = '../IMG/Escolidos/Robos/girl/robot-e.png';
        img.setAttribute('id', 'war-girl-img');
        img.style.transform = 'scaleX(-1)';
        nomeVida(personagens2[15].nome, personagens2[15].vida);
        ataque(personagens2[15].ataque, personagens2[15].agilidade, personagens2[15].habilidade, '#atacando-2');
        defesa(personagens2[15].defesa, personagens2[15].agilidade, personagens2[15].habilidade, '#defendendo-2');
        break;
    default:
        alert('Erro ao esolher personagem.');
        break;
}




