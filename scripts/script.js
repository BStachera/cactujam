let chat_message = [
    "HELLO I’M MAGNETIO I REALLY WHAT TO BE THE MOST POWERFULL MAGNET IN THE UNIVERSE CAN YOU HELP ME?",
    "REALLY? I'M SO EXCITED. I WILL HELP YOU :D LET'S START FROM BUING A NEWSPAPER AND MAGNETIZING ATOMS AT THE LEFT! HERE IS <br> 10+ energy :3",
    "WHY? I THOUGHT THAT IT WILL BE FUN.. EHH.... OKAY SO.. GTFO ON CACTUS :/ FEELS DEMAGNETIC",
    "WHAT ELECTRONS CAN PAPER ARCHIWE WHEN IT IS SCRATCHING THE GLASS BOTTLE? PLUS OR MINUS? YOU CAN WON<br> 10x MORE ENEGRY :3",
    "SOFT SOCK FOR REAL GAMERS AND MAGNETIONS, CACTUSOCK CACTU SUCKS, JUST KIDDING",
    "OOOO HELLO EMO GUY, YOU WILL HELP ME WITH YOUR AMAZING HAIR FROM METALIC MUSIC",
    "I'M GLAD TO MEET A DEAD ZEBER",
    "LET'S WORK WITH A HAND HUHHU IT'S LIKE MASTURBATION BUT YOU WILL HELP ME NOT YOU ;*",
    "SOO MUCH ELECTROMAGNENCY, I FEEL INSIDE SHINE, BATTERY AAA + GREAT SOURCE OF ENERGY",
    "YOU THINK THAT THIS IS A GOOD IDEA TO CHARGE ME WITH ATOM ENERGY? OKAY LET'S GO. I FEEL LIKE I'M IN HEAVEN ",
    "CACTU GENERATOR, YOU ARE SERIOUS, WAIT..... OOO..... WHAT????.... THIS IS SOOOOO POWERFULLLLLLLLLL",
    "I WILL BE LIKE A CACTU GOD, CACTU GOD IS THE MOST POWERFUL THING WHAT CAN YOU IMAGINE AND USE"
];
let energy = 0;
let item_cnt = [0,0,0,0,0,0,0,0,0];
let item_add = [1,10,50,100,500,1000,5000,100000,500000];
let item_act = [0,0,0,0,0,0,0,0,0];
let item_prc = [10,100,10000,100000,1000000,10000000,100000000,1000000000,10000000000];
let nazwy =["CACTU NEWS","CACTUSOCK","EMO HAIR","ZEBER FUR/SHIN", "HAND MACHINE","AAA+ BATTERY","NUCLEAR ENERGY ","CACTU GENERATOR","CACTU GOD BLESSING "]
let synth = window.speechSynthesis;
function speaknow(a){
    let x = new SpeechSynthesisUtterance(a);
        x.lang = 'en-EN';
        synth.speak(x);
}
function magclick(){
    console.log("click");
    let energy_clk = ((item_add[0]*item_cnt[0])+(item_add[1]*item_cnt[1])+(item_add[2]*item_cnt[2])+(item_add[3]*item_cnt[3])+(item_add[4]*item_cnt[4])+(item_add[5]*item_cnt[5])+(item_add[6]*item_cnt[6])+(item_add[7]*item_cnt[7])+(item_add[8]*item_cnt[8]));
    energy += energy_clk;
    console.log(energy);
    document.getElementById('energy_cnt').innerHTML = energy;


}
function buy(x){
    if (item_prc[x] <= energy){
        console.log("buy");
        energy -= item_prc[x];
        item_cnt[x] += 1;
        document.getElementById('energy_cnt').innerHTML = energy;
        document.getElementsByClassName('count')[x].innerHTML = "COUNT: "+item_cnt[x];

        if(item_cnt[0] == 1){
            document.getElementById('chat').innerHTML = chat_message[3];
            speaknow("achievement: Cactus News fresh news");
        }
        if(item_cnt[1] == 1){
            document.getElementById('chat').innerHTML = chat_message[4];
            speaknow("achievement: Fresh sock");
        }
        if(item_cnt[2] == 1){
            document.getElementById('chat').innerHTML = chat_message[5];
            speaknow("achievement: fresh hair with a lot of metal");
        }
        if(item_cnt[3] == 1){
            document.getElementById('chat').innerHTML = chat_message[6];
            speaknow("achievement: Zebra skin, Zeber, ouu ");
        }
        if(item_cnt[4] == 1){
            document.getElementById('chat').innerHTML = chat_message[7];
            speaknow("achievement: Let's masturbate hyhy");
        }
        if(item_cnt[5] == 1){
            document.getElementById('chat').innerHTML = chat_message[8];
            speaknow("achievement: battery life, charge me up");
        }
        if(item_cnt[6] == 1){
            document.getElementById('chat').innerHTML = chat_message[9];
            speaknow("achievement: This is soo dangerous");
        }
        if(item_cnt[7] == 1){
            document.getElementById('chat').innerHTML = chat_message[10];
            speaknow("achievement: power from cactus");
        }
        if(item_cnt[8] == 1){
            document.getElementById('chat').innerHTML = chat_message[11];
            speaknow("achievement: Heil Cactus, Heil Cactus, God bless you");
        }

    }else{
        speaknow("Low energy")
    }
}
function table_create(){
    for( let x=1; x<= 9; x++){
        document.write("<li class='items'> <ul class='itembar'><li> <img src='images/item/"+x+".png'></li><li> <span class='buy' onclick='buy("+(x-1)+")'>BUY</span></li><li> <span class='count'>COUNT:"+item_cnt[x-1]+" </span></li><li> <span>"+nazwy[x-1]+"</span></li><li> <span id='price'>"+item_prc[x-1]+"<img class='powerprice' src='images/power.png'></span></li></ul></li>")
    }
    document.getElementById('chat').innerHTML = chat_message[0];
}
function glosowanie_one(x){

}
function glosowanie_one(){

}
function glosowanie_one(){

}