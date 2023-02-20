
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

function ataque(ataque, agilidade, habilidade, nomeDoJogador, escutarPersonagem ){
    let atacar = document.querySelector(escutarPersonagem);
    let dados = habilidade * 6;
    let habilidade_p = Math.floor(Math.random() * (dados - 1 + 1) + 1);
    let ataque_p = ataque + habilidade_p;

    let atacandoCom = document.querySelector(nomeDoJogador);//'#atacando-1' ou '#atacando-2'
    atacandoCom.innerText = ataque_p;

    atacar.addEventListener('click', ()=>{//'#atacando_p1' ou '#atacando_p2'
        localStorage.setItem(escutarPersonagem, ataque_p);
        dados = habilidade * 6;
        habilidade_p = Math.floor(Math.random() * (dados - 1 + 1) + 1);
        ataque_p = ataque + habilidade_p;
    
        atacandoCom = document.querySelector(nomeDoJogador);//'#atacando-1' ou '#atacando-2'
        atacandoCom.innerText = ataque_p;
   
        //window.location.reload();
    });

    return ataque_p;
}
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




function atributosDojogador(ata, def, agi, hab, ataque_, defesa_, agilidade_, habilidade_){//'#ataque-1', '#defesa-1', '#agilidade-1', '#habilidade-1'
    let ataque = document.querySelector(ataque_);
    ataque.innerText = ata;
    let defesa = document.querySelector(defesa_);
    defesa.innerText = def;
    let agilidade = document.querySelector(agilidade_);
    agilidade.innerText = agi;
    let habilidade = document.querySelector(habilidade_);
    habilidade.innerText = hab;
}

personagemEscolido = localStorage.getItem('personagem');

switch(personagemEscolido){
    case '1': 
        document.getElementById('mostra-ninja').style.display = 'block';
        atributosDojogador(personagens[0].ataque, personagens[0].defesa, personagens[0].agilidade, personagens[0].habilidade, '#ataque-1', '#defesa-1', '#agilidade-1', '#habilidade-1');
        nomeVida(personagens[0].nome, personagens[0].vida, '#nome-jogador1', '#vida-p1');
        ataque(personagens[0].ataque, personagens[0].agilidade, personagens[0].habilidade, '#atacando-1', '#atacando_p1');
        defesa(personagens[0].defesa, personagens[0].agilidade, personagens[0].habilidade, '#defendendo-1', '#defendendo_p1');
        break;
   case '2': 
        document.getElementById('mostra-guerreira').style.display = 'block';
        atributosDojogador(personagens[1].ataque, personagens[1].defesa, personagens[1].agilidade, personagens[1].habilidade, '#ataque-1', '#defesa-1', '#agilidade-1', '#habilidade-1');
        nomeVida(personagens[1].nome, personagens[1].vida, '#nome-jogador1', '#vida-p1');
        ataque(personagens[1].ataque, personagens[1].agilidade, personagens[1].habilidade, '#atacando-1', '#atacando_p1');
        defesa(personagens[1].defesa, personagens[1].agilidade, personagens[1].habilidade, '#defendendo-1', '#defendendo_p1');
        break;
    case '3':
        document.getElementById('mostra-centuriao').style.display = 'block';
        atributosDojogador(personagens[2].ataque, personagens[2].defesa, personagens[2].agilidade, personagens[2].habilidade, '#ataque-1', '#defesa-1', '#agilidade-1', '#habilidade-1');
        nomeVida(personagens[2].nome, personagens[2].vida, '#nome-jogador1', '#vida-p1');
        ataque(personagens[2].ataque, personagens[2].agilidade, personagens[2].habilidade, '#atacando-1', '#atacando_p1');
        defesa(personagens[2].defesa, personagens[2].agilidade, personagens[2].habilidade, '#defendendo-1', '#defendendo_p1');
        break;
    case '4':
        document.getElementById('mostra-soldado').style.display = 'block';
        atributosDojogador(personagens[3].ataque, personagens[3].defesa, personagens[3].agilidade, personagens[3].habilidade, '#ataque-1', '#defesa-1', '#agilidade-1', '#habilidade-1');
        nomeVida(personagens[3].nome, personagens[3].vida, '#nome-jogador1', '#vida-p1');
        ataque(personagens[3].ataque, personagens[3].agilidade, personagens[3].habilidade, '#atacando-1', '#atacando_p1');
        defesa(personagens[3].defesa, personagens[3].agilidade, personagens[3].habilidade, '#defendendo-1', '#defendendo_p1');
        break;
    case '5':
        document.getElementById('mostra-fada').style.display = 'block';
        atributosDojogador(personagens[4].ataque, personagens[4].defesa, personagens[4].agilidade, personagens[4].habilidade, '#ataque-1', '#defesa-1', '#agilidade-1', '#habilidade-1');
        nomeVida(personagens[4].nome, personagens[4].vida, '#nome-jogador1', '#vida-p1');
        ataque(personagens[4].ataque, personagens[4].agilidade, personagens[4].habilidade, '#atacando-1', '#atacando_p1');
        defesa(personagens[4].defesa, personagens[4].agilidade, personagens[4].habilidade, '#defendendo-1', '#defendendo_p1');
        break;
    case '6':
        document.getElementById('mostra-mago').style.display = 'block';
        atributosDojogador(personagens[5].ataque, personagens[5].defesa, personagens[5].agilidade, personagens[5].habilidade, '#ataque-1', '#defesa-1', '#agilidade-1', '#habilidade-1');
        nomeVida(personagens[5].nome, personagens[5].vida, '#nome-jogador1', '#vida-p1');
        ataque(personagens[5].ataque, personagens[5].agilidade, personagens[5].habilidade, '#atacando-1', '#atacando_p1');
        defesa(personagens[5].defesa, personagens[5].agilidade, personagens[5].habilidade, '#defendendo-1', '#defendendo_p1');
        break;
    case '7':
        document.getElementById('mostra-necromante').style.display = 'block';
        atributosDojogador(personagens[6].ataque, personagens[6].defesa, personagens[6].agilidade, personagens[6].habilidade, '#ataque-1', '#defesa-1', '#agilidade-1', '#habilidade-1');
        nomeVida(personagens[6].nome, personagens[6].vida, '#nome-jogador1', '#vida-p1');
        ataque(personagens[6].ataque, personagens[6].agilidade, personagens[6].habilidade, '#atacando-1', '#atacando_p1');
        defesa(personagens[6].defesa, personagens[6].agilidade, personagens[6].habilidade, '#defendendo-1', '#defendendo_p1');
        break;
    case '8': 
        document.getElementById('mostra-elfo').style.display = 'block';
        atributosDojogador(personagens[7].ataque, personagens[7].defesa, personagens[7].agilidade, personagens[7].habilidade, '#ataque-1', '#defesa-1', '#agilidade-1', '#habilidade-1');
        nomeVida(personagens[7].nome, personagens[7].vida, '#nome-jogador1', '#vida-p1');
        ataque(personagens[7].ataque, personagens[7].agilidade, personagens[7].habilidade, '#atacando-1', '#atacando_p1');
        defesa(personagens[7].defesa, personagens[7].agilidade, personagens[7].habilidade, '#defendendo-1', '#defendendo_p1');
        break;
    case '9':
        document.getElementById('mostra-troll').style.display = 'block';
        atributosDojogador(personagens[8].ataque, personagens[8].defesa, personagens[8].agilidade, personagens[8].habilidade, '#ataque-1', '#defesa-1', '#agilidade-1', '#habilidade-1');
        nomeVida(personagens[8].nome, personagens[8].vida, '#nome-jogador1', '#vida-p1');
        ataque(personagens[8].ataque, personagens[8].agilidade, personagens[8].habilidade, '#atacando-1', '#atacando_p1');
        defesa(personagens[8].defesa, personagens[8].agilidade, personagens[8].habilidade, '#defendendo-1', '#defendendo_p1');
        break;
    case '10':
        document.getElementById('mostra-orc').style.display = 'block';
        atributosDojogador(personagens[9].ataque, personagens[9].defesa, personagens[9].agilidade, personagens[9].habilidade, '#ataque-1', '#defesa-1', '#agilidade-1', '#habilidade-1');
        nomeVida(personagens[9].nome, personagens[9].vida, '#nome-jogador1', '#vida-p1');
        ataque(personagens[9].ataque, personagens[9].agilidade, personagens[9].habilidade, '#atacando-1', '#atacando_p1');
        defesa(personagens[9].defesa, personagens[9].agilidade, personagens[9].habilidade, '#defendendo-1', '#defendendo_p1');
        break;
    case '11':
        document.getElementById('mostra-lobisomem').style.display = 'block';
        atributosDojogador(personagens[10].ataque, personagens[10].defesa, personagens[10].agilidade, personagens[10].habilidade, '#ataque-1', '#defesa-1', '#agilidade-1', '#habilidade-1');
        nomeVida(personagens[10].nome, personagens[10].vida, '#nome-jogador1', '#vida-p1');
        ataque(personagens[10].ataque, personagens[10].agilidade, personagens[10].habilidade, '#atacando-1', '#atacando_p1');
        defesa(personagens[10].defesa, personagens[10].agilidade, personagens[10].habilidade, '#defendendo-1', '#defendendo_p1');
        break;
    case '12':
        document.getElementById('mostra-orc-warrior').style.display = 'block';
        atributosDojogador(personagens[11].ataque, personagens[11].defesa, personagens[11].agilidade, personagens[11].habilidade, '#ataque-1', '#defesa-1', '#agilidade-1', '#habilidade-1');
        nomeVida(personagens[11].nome, personagens[11].vida, '#nome-jogador1', '#vida-p1');
        ataque(personagens[11].ataque, personagens[11].agilidade, personagens[11].habilidade, '#atacando-1', '#atacando_p1');
        defesa(personagens[11].defesa, personagens[11].agilidade, personagens[11].habilidade, '#defendendo-1', '#defendendo_p1');
        break;
    case '13': 
        document.getElementById('mostra-cyber-human').style.display = 'block';
        atributosDojogador(personagens[12].ataque, personagens[12].defesa, personagens[12].agilidade, personagens[12].habilidade, '#ataque-1', '#defesa-1', '#agilidade-1', '#habilidade-1');
        nomeVida(personagens[12].nome, personagens[12].vida, '#nome-jogador1', '#vida-p1');
        ataque(personagens[12].ataque, personagens[12].agilidade, personagens[12].habilidade, '#atacando-1', '#atacando_p1');
        defesa(personagens[12].defesa, personagens[12].agilidade, personagens[12].habilidade, '#defendendo-1', '#defendendo_p1');
        break;
    case '14':
        document.getElementById('mostra-spider').style.display = 'block';
        atributosDojogador(personagens[13].ataque, personagens[13].defesa, personagens[13].agilidade, personagens[13].habilidade, '#ataque-1', '#defesa-1', '#agilidade-1', '#habilidade-1');
        nomeVida(personagens[13].nome, personagens[13].vida, '#nome-jogador1', '#vida-p1');
        ataque(personagens[13].ataque, personagens[13].agilidade, personagens[13].habilidade, '#atacando-1', '#atacando_p1');
        defesa(personagens[13].defesa, personagens[13].agilidade, personagens[13].habilidade, '#defendendo-1', '#defendendo_p1');
        break;
    case '15': 
        document.getElementById('mostra-war-robot').style.display = 'block';
        atributosDojogador(personagens[14].ataque, personagens[14].defesa, personagens[14].agilidade, personagens[14].habilidade, '#ataque-1', '#defesa-1', '#agilidade-1', '#habilidade-1');
        nomeVida(personagens[14].nome, personagens[14].vida, '#nome-jogador1', '#vida-p1');
        ataque(personagens[14].ataque, personagens[14].agilidade, personagens[14].habilidade, '#atacando-1', '#atacando_p1');
        defesa(personagens[14].defesa, personagens[14].agilidade, personagens[14].habilidade, '#defendendo-1', '#defendendo_p1');
        break;
    case '16': 
        document.getElementById('mostra-war-girl').style.display = 'block';
        atributosDojogador(personagens[15].ataque, personagens[15].defesa, personagens[15].agilidade, personagens[15].habilidade, '#ataque-1', '#defesa-1', '#agilidade-1', '#habilidade-1');
        nomeVida(personagens[15].nome, personagens[15].vida, '#nome-jogador1', '#vida-p1');
        ataque(personagens[15].ataque, personagens[15].agilidade, personagens[15].habilidade, '#atacando-1', '#atacando_p1');
        defesa(personagens[15].defesa, personagens[15].agilidade, personagens[15].habilidade, '#defendendo-1', '#defendendo_p1');
        break;
    default:
        alert('Ocorreu um erro!');
        break;
}