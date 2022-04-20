let cases = document.getElementsByClassName('case');
let score1 = 0, score2 = 0, nul = 0;
function range(_start_, _end_) {
    return (new Array(_end_ - _start_ + 1)).fill(undefined).map((_, k) =>k + _start_); 
};
function update(){
    return{
        case1:1,
        case2:2,
        case3:3,
        case4:4,
        case5:5,
        case6:6,
        case7:7,
        case8:8,
        case9:9,
    };
};
function reset(){
   for(let i=0; i<9;i++){
       cases[i].innerHTML='';
   }
};
function addtest(e,value,states){
    e.target.innerHTML = value;
    e.target.value=value;
    states[e.target.name]=value;
}
const controle =(states)=>{
   if(states['case1']===states['case2'] && states['case2']===states['case3'])
       return true;
   if(states['case4']===states['case5'] && states['case5']===states['case6'])
        return true;
   if(states['case7']===states['case8'] && states['case8']===states['case9'])
        return true;
   if(states['case1']===states['case4'] && states['case4']===states['case7'])
        return true;
   if(states['case2']===states['case5'] && states['case5']===states['case8'])
        return true;
   if(states['case3']===states['case6'] && states['case6']===states['case9'])
        return true;
   if(states['case1']===states['case5'] && states['case5']===states['case9'])
        return true;
   if(states['case3']===states['case5'] && states['case5']===states['case7'])
        return true;
return false;
};
function style(elt){
    elt.style.fontFamily = 'sans-serif';
    elt.style.fontSize = 25 +'px';
}
let states = update(),current = document.getElementById('joueur'),victoire;
let currentj =1 ,cpt=0,j1 = document.getElementById('j1'),j2 = document.getElementById('j2'),dernier = document.getElementById('nul');
function evenement(e){
    e.preventDefault();
    e.stopPropagation();
    if(states[e.target.name]!='X' && states[e.target.name]!='O'){
        if(currentj==1){
            addtest(e,'X',states);
            if(controle(states)){
                score1++;
                j1.innerHTML=score1;
                alert('Le gagnant est le joueur 1'); 
                cpt = 0; 
                reset();
                states = update();
            }else{
                cpt++;
                current.innerHTML = 2;
                currentj = 2;  
            }
        }else{
            addtest(e,'O',states);
            if(controle(states)){
                score2++;
                j2.innerHTML=score2;
                cpt=0;
                alert('Le gagnant est le joueur 2');  
                reset();
                states = update();
            }else{
                cpt++;
                current.innerHTML = 1;
                currentj = 1;  
            } 
        }
        if(cpt===9){
            alert('Match nul');
            nul++;
            dernier.innerHTML = nul;
            cpt=0;
            reset();
            states = update();
        }
    }
}
for(let i = 0 ; i < 9; i++){
    cases[i].addEventListener('click',(e)=>{
        evenement(e);
    });
}



