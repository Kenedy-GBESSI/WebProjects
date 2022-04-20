function random(){
    return {
       1: [Math.ceil(Math.random()*255),Math.ceil(Math.random()*255),Math.ceil(Math.random()*255)],
       2: [Math.ceil(Math.random()*255),Math.ceil(Math.random()*255),Math.ceil(Math.random()*255)],
       3: [Math.ceil(Math.random()*255),Math.ceil(Math.random()*255),Math.ceil(Math.random()*255)],
       4: [Math.ceil(Math.random()*255),Math.ceil(Math.random()*255),Math.ceil(Math.random()*255)]
    }
}
let ecran = document.getElementById('ecran'),colors = random(),color = colors[Math.ceil(Math.random()*3+1)];
let button1=document.getElementById('button1'),button2=document.getElementById('button2'),button3=document.getElementById('button3'),button4=document.getElementById('button4');
let rgb = 'rgb('+color[0] + ','+ color[1]+ ','+color[2]+')',score = 0,afficheurScore = document.getElementById('score');
ecran.style.backgroundColor=rgb;
generator();
document
.getElementById('mini-wrapper')
.addEventListener('click',(e)=>{
    console.log(e.target.name)
    if(['b1','b2','b3','b4'].indexOf(e.target.name)!=-1){
        if(rgb===e.target.value){
            score++;
            afficheurScore.innerHTML=score;
            colors = random();
            color = colors[Math.ceil(Math.random()*3+1)];
            rgb = 'rgb('+color[0] + ','+ color[1]+ ','+color[2]+')';
            ecran.style.backgroundColor = rgb;
            generator();
        }else{
            score = 0;
            afficheurScore.innerHTML=score;
            colors = random();
            color = colors[Math.ceil(Math.random()*3+1)];
            alert("Votre resultat est faux ! La vraie réponse :"+rgb);
            rgb = 'rgb('+color[0] + ','+ color[1]+ ','+color[2]+')';
            ecran.style.backgroundColor = rgb;
            generator();
        }
    } 
});
function generator(){
    button1.innerHTML='rgb('+colors[1][0] + ','+ colors[1][1]+ ','+colors[1][2]+')';
    button1.value='rgb('+colors[1][0] + ','+ colors[1][1]+ ','+colors[1][2]+')';
    
    button2.innerHTML='rgb('+colors[2][0] + ','+ colors[2][1]+ ','+colors[2][2]+')';
    button2.value='rgb('+colors[2][0] + ','+ colors[2][1]+ ','+colors[2][2]+')';
    
    button3.innerHTML='rgb('+colors[3][0] + ','+ colors[3][1]+ ','+colors[3][2]+')';
    button3.value='rgb('+colors[3][0] + ','+ colors[3][1]+ ','+colors[3][2]+')';
    
    button4.innerHTML='rgb('+colors[4][0] + ','+ colors[4][1]+ ','+colors[4][2]+')';
    button4.value='rgb('+colors[4][0] + ','+ colors[4][1]+ ','+colors[4][2]+')';
}