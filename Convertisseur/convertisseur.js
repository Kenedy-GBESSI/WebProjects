let value = 0,measuredefault='km',measure='m';
function convertir(value,measure){
 let measures={km:0,hm:0,dam:0,m:0,dm:0,cm:0,mm:0};
 if(measure=='km')
    measures={km:value,hm:value*10,dam:value*100,m:value*1000,dm:value*10000,cm:value*100000,mm:value*1000000};
 if(measure=='hm')
    measures={km:value/10,hm:value,dam:value*10,m:value*100,dm:value*1000,cm:value*10000,mm:value*100000};
 if(measure=='dam')
    measures={km:value/100,hm:value/10,dam:value,m:value*10,dm:value*100,cm:value*1000,mm:value*10000};
 if(measure=='m')
    measures={km:value/1000,hm:value/100,dam:value/10,m:value,dm:value*10,cm:value*100,mm:value*1000};
 if(measure=='dm')
    measures={km:value/10000,hm:value/1000,dam:value/100,m:value/10,dm:value,cm:value*10,mm:value*100};
 if(measure=='cm')
    measures={km:value/100000,hm:value/10000,dam:value/1000,m:value/100,dm:value/10,cm:value,mm:value*10};
 if(measure=='mm')
    measures={km:value/1000000,hm:value/100000,dam:value/10000,m:value/1000,dm:value/100,cm:value/10,mm:value}
return measures;
}
document
.getElementsByTagName('button')[0]
.addEventListener('click',(e)=>{
    e.preventDefault();
    e.stopPropagation();
    document.getElementById('display-value').innerHTML = convertir(value,measuredefault)[measure];
})
document
.getElementById('a-convertir')
.addEventListener('input',(e)=>{
    value = parseFloat(e.target.value);
    document.getElementById('display-value').innerHTML=''
});
document
.getElementById('distance-selector1')
.addEventListener('change',(e)=>{
   measuredefault=e.target.value;
   document.getElementById('display-value').innerHTML=''
});
document
.getElementById('distance-selector2')
.addEventListener('change',(e)=>{
    measure = e.target.value;
    document.getElementById('display-value').innerHTML=''
})