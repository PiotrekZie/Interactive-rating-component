var value;
var oldValue='';
var a;

function ratingValue(v){
    value=v;
    if(oldValue!=''){
    a=document.getElementsByClassName('rating')[parseInt(oldValue)-1]; 
    oldValue='';
    }
    a=document.getElementsByClassName('rating')[parseInt(value)-1];
    oldValue=value;
}

function disThanks(){

    if(value==undefined){
        alert("Coś tu poszło nie tak :/");
    }
    else
    {
        var beforeRating=document.getElementById('one');
        beforeRating.style.display='none';

        var activeRating=document.getElementById('two');
        activeRating.style.display='flex';

        var valueRate=document.getElementById('choice');
        valueRate.innerHTML=value;
    }
}