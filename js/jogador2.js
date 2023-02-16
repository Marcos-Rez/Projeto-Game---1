let personagemEscolido;

let orc_warrior  = document.querySelector('#mostra-orc-warrior');
let containerJogador2 = document.querySelector('#container-jogador2');
let img = document.querySelector('#orc-warrior-img');
img.src = '../IMG/Escolidos/Monstros/Orc-4/character-invertido.png'
orc_warrior = orc_warrior .innerHTML;
containerJogador2.innerHTML = orc_warrior;

let mostarNinja = document.querySelector('.mostra-ninja');

mostarNinja.style.display == 'block';
mostarNinja.style.color = 'red';


personagemEscolido = localStorage.getItem('personagem');
/*
if(personagemEscolido == 1){
    document.getElementById("mostra-ninja").style.display = "block";
}
*/
switch(personagemEscolido){
    case '1': 
        document.getElementById('mostra-ninja').style.display = 'block';
        break;
    case '2': 
        document.getElementById('mostra-guerreira').style.display = 'block';
        break;
    case '3':
        document.getElementById('mostra-centuriao').style.display = 'block';
        break;
    case '4':
        document.getElementById('mostra-soldado').style.display = 'block';
        break;
    case '5':
        document.getElementById('mostra-fada').style.display = 'block';
        break;
    case '6':
        document.getElementById('mostra-mago').style.display = 'block';
        break;
    case '7':
        document.getElementById('mostra-necromante').style.display = 'block';
        break;
    case '8': 
        document.getElementById('mostra-elfo').style.display = 'block';
        break;
    case '9':
        document.getElementById('mostra-troll').style.display = 'block';
        break;
}
