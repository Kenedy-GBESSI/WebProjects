const bgFroid = "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)";
const bgTiede = "linear-gradient(120deg, #f6d365 0%, #fda085 100%)";
const bgChaud = "linear-gradient(-60deg, #ff5858 0%, #f09819 100%)";
const bgBrulant = "linear-gradient(to top, #ff0844 0%, #ffb199 100%)";
const bgWin = "linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%)";
const bgLoose = "linear-gradient(60deg, #29323c 0%, #485563 100%)";

class Jeu{
    constructor(num){
        this.num = num;
    }
    perder(nom){
        nom.style.backgroundColor='bisque';
    }
    gagner(numProposer,essai){
        if(numProposer!==this.num){
            this.perder(document.getElementsByClassName('heart')[essai-1]);
            if(numProposer >= this.num-2 && numProposer <= this.num + 2){
                return 'b';
            }else if(numProposer >= this.num-5 && numProposer <= this.num + 5){
                  return 'c';
            }else if(numProposer >= this.num-10 && numProposer <= this.num + 10){
                  return 't';
            }else{
                  return 'f';
            }
        }else{
            return 'trouver';
        }
    }
    setCacher(value){
        this.num=value;
    }

}
let VIE_JOUEUR=6,VALEUR_A_DEVINER = Math.ceil(Math.random()*100);
let jeu = new Jeu(VALEUR_A_DEVINER),body = document.getElementsByClassName('body')[0],score = document.getElementById('resultat');
let p = document.getElementById('chiffre');
console.log(VALEUR_A_DEVINER);
document
.getElementById('form')
.addEventListener('submit',(e)=>{
    e.preventDefault();
    e.stopPropagation();
    let input = parseInt(p.value);
    console.log(input);
    if(input){
        if(VIE_JOUEUR >=1){
            console.log(VALEUR_A_DEVINER);
            let jeu = new Jeu(VALEUR_A_DEVINER);
            let result = jeu.gagner(input,VIE_JOUEUR);
            if(result=='b'){
                body.style.backgroundImage = bgBrulant;
                score.textContent = "Cest brûlant !";
                VIE_JOUEUR--;
            }else if(result=='c'){
               body.style.backgroundImage = bgChaud ;
               score.textContent = "Cest chaud !";
               VIE_JOUEUR--;
            }else if(result=='t'){
                  body.style.backgroundImage = bgTiede;
                  score.textContent = 'C\'est tiède !';
                  VIE_JOUEUR--;
            }else if(result=='f'){
                   body.style.backgroundImage = bgFroid;
                   score.textContent = 'C\'est froid';
                   VIE_JOUEUR--;
            }else{
            body.style.backgroundImage = bgWin;
            score.textContent = "Bravo !!! C'est bien sûr "+VALEUR_A_DEVINER.toString();
            toggle();
            }
        }else{
            body.style.backgroundImage=bgLoose;
            score.textContent = 'Vous avez epuisés toute votre vie';
            toggle();
        }
        
    }
}
);
function toggle(){
    let btn = document.getElementById('Jouer')
    btn.style.display = 'inline';
    for(let i=0; i< 6;i++){
              document.getElementsByClassName('heart')[i].style.backgroundColor = 'red';
        } 
    btn.addEventListener('click',()=>{
        document.location.reload(true);
    }) 
}

