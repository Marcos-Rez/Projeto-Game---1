const personagens = [
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
let personagemEscolido;


//ataque para p jogador 1
function ataque(ataque, agilidade, habilidade, nomeDoJogador, escutarPersonagem ){

    let dados = habilidade * 6;
    let habilidade_p = Math.floor(Math.random() * (dados - 1 + 1) + 1);
    let ataque_p = ataque + habilidade_p;

    let atacandoCom = document.querySelector(nomeDoJogador);//'#atacando-1' ou '#atacando-2'
    atacandoCom.innerText = ataque_p;

    let atacar = document.querySelector(escutarPersonagem).addEventListener('click', ()=>{//'#atacando_p1' ou '#atacando_p2'
        localStorage.setItem(escutarPersonagem, ataque_p);
        window.location.reload();
    });

    return ataque_p;
}
//ataque para o jogador 2
function ataque(ataque, agilidade, habilidade, nomeDoJogador ){

    let dados = habilidade * 6;
    let habilidade_p = Math.floor(Math.random() * (dados - 1 + 1) + 1);
    let ataque_p = ataque + habilidade_p;
    let atacandoCom = document.querySelector(nomeDoJogador);//'#atacando-1' ou '#atacando-2'

    localStorage.setItem('#atacando-2', ataque_p);
    atacandoCom.innerText = ataque_p;
    return ataque_p;
}

//defesa para jogador 1
function defesa(defesa, agilidade, habilidade, nomeDoJogador, escutarPersonagem){
    let dados = habilidade * 6;
    let habilidade_p = Math.floor(Math.random() * (dados - 1 + 1) + 1);
    let defesa_p = defesa + habilidade_p;

    let defendendoCom = document.querySelector(nomeDoJogador);//'#defendendo-1' ou '#defendendo-2'
    defendendoCom.innerText = defesa_p;

    localStorage.setItem(escutarPersonagem, defesa_p);
    let defender = document.querySelector(escutarPersonagem).addEventListener('click', ()=>{//'#defendendo_p1'
        alert('Nenhum evento');
    })
    return defesa_p;
}

//defesa para jogador 2

function defesa(defesa, agilidade, habilidade, nomeDoJogador){
    let dados = habilidade * 6;
    let habilidade_p = Math.floor(Math.random() * (dados - 1 + 1) + 1);
    let defesa_p = defesa + habilidade_p;

    let defendendoCom = document.querySelector(nomeDoJogador);//'#defendendo-2'
    defendendoCom.innerText = defesa_p;
    localStorage.setItem('#defesa_p2', defesa_p)
    return defesa_p;
}

function nomeVida(arr, vida, nomeJogador, vidaJogador){
    let porcentagem;
    if(vida == 150){
        porcentagem = (10 * 150) / 100 ;
    }else if(vida == 100){
        porcentagem = (10 * 100) / 100 ;
    }


    let nome = document.querySelector(nomeJogador);//'#nome-jogador1' ou '#nome-jogador2'
    nome.innerText = arr;

    let vidaJogador1 = document.querySelector(vidaJogador);//'#vida-p1' ou '#vida-p2'
    vidaJogador1.innerText = vida;

    let porcentagemVida = Number(vida);
    vidaJogador1.style.maxWidth = `${porcentagem}vw`;
}


function atributosDojogador(ata, def, agi, hab, ataque_, defesa_, agilidade_, habilidade_){/*, '#ataque-2', '#defesa-2', '#agilidade-2', '#habilidade-2'*/
//'#ataque-1', '#defesa-1', '#agilidade-1', '#habilidade-1'
    let ataque = document.querySelector(ataque_);
    ataque.innerText = ata;
    let defesa = document.querySelector(defesa_);
    defesa.innerText = def;
    let agilidade = document.querySelector(agilidade_);
    agilidade.innerText = agi;
    let habilidade = document.querySelector(habilidade_);
    habilidade.innerText = hab;
}

//função apenas do jogador 2 por ser a maquina
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