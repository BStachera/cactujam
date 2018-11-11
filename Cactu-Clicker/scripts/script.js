let money = 0;
let kaktus = ["lv1","lv2","lv3","lv4","lv5","lv6","lv7","lv8","lv9"];
let x = 0;
let lvl = 1;
let xp = 0;
let synth = window.speechSynthesis;
let wiadra = 0;
let rekawice = 0;
let wzgledna_szczescia = 1;

function moneyfun(){
    if(money >= 10){
        document.getElementById('wiadro').style.backgroundColor = "#bdf0a8";   
    }else{
        document.getElementById('wiadro').style.backgroundColor = "#b5b5b5"; 
    }
    if(money >= 15){
        document.getElementById('rekawica').style.backgroundColor = "#bdf0a8";   
    }else{
        document.getElementById('rekawica').style.backgroundColor = "#b5b5b5"; 
    }
}
function speaknow(a){
    let x = new SpeechSynthesisUtterance(a);
        x.lang = 'pl-PL';
        synth.speak(x);
}
function starte(){
    //Xp points
    xp += ((Math.pow(wiadra, 2))+10)/(Math.pow(lvl, 2));
    if(xp >= 100){
         if(lvl >= 9){               
            x++;
            lvl++;
            document.getElementById("lvl").innerHTML = lvl;
            document.getElementById("zmiana_kaktusa").src= "grafika/kaktusy/lv9.png";
            document.getElementById("xp").style.width= "100%";
            document.getElementById("text_xp").innerHTML = "LeveL up!!";
            xp = 0;
        }else{               
            x++;
            lvl++;
            document.getElementById("lvl").innerHTML = lvl;
            document.getElementById("zmiana_kaktusa").src= "grafika/kaktusy/"+kaktus[x]+".png";
            document.getElementById("xp").style.width= "100%";
            document.getElementById("text_xp").innerHTML = "LeveL up!!";
            xp = 0;
        }
    }else{
        document.getElementById("xp").style.width= Math.round(xp)+"%";
        document.getElementById("text_xp").innerHTML = Math.round(xp)+"xp of 100xp";
    }
    let luck = Math.floor((Math.random() * 50) + 1);
    //Get Money
    if (luck >= 50-rekawice){
        money += 3;
        document.getElementById('money').innerHTML = money;
    }else if( luck >= 20 && luck < 50-rekawice){
        money +=1;
        document.getElementById('money').innerHTML = money;
    }else{
        document.getElementById('money').innerHTML = money;
    }
    moneyfun();
    console.log("|wiadra |"+wiadra+"|rekawice |"+rekawice+"|xp |"+xp+"|luck |"+luck+"|money |"+money);
} 
function zakup(a){
    console.log("funckja kup");
    if(a == 1 && money >= 10){
        money -= 10;
        wiadra++;
        document.getElementById('ilosc_wiadro').innerHTML = wiadra;
        document.getElementById('money').innerHTML = money;
        speaknow("Wazelina kupiona");
    }else if(a == 1 && money < 10){
        speaknow("ale bieda");
    }else if(a == 2 && money >= 15){
        money -= 15;
        rekawice++;
        document.getElementById('ilosc_rekawica').innerHTML = rekawice;
        document.getElementById('money').innerHTML = money;
        speaknow("Renia zakupiona");
    }else if(a == 2 && money < 15){
        speaknow("nie walisz");
    } 
    moneyfun();
}