let synth = window.speechSynthesis;
let hunger = 0, drunk = 0, happiness = 0, sleep = 0, money = 20, lvl = 0, mps = 0, i = 0;
let alco = [25,40, 80,500,1000];
let sweet = [10,50,150,500];
let sweethung = [10,20,45,100];
let sweethapi = [2,10,20,30];
let alkdrunk = [5,15,20,40,80];
let alkhapi = [8,12,20,45,90]
let hookers_money = [10,100,1000];
let hookers_cnt = [0,0,0];
let hookers_mps = [2,10,50];
let storyconting =[0,0,0,0,0];
let santapricing = [500, 5000, 25000, 100000];
let storytell = [
  "Mikołaj: Kurwa? Co się dzieje, kurwa co się stało? Gdzie ja jestem? Co to za jaskinia, Elfy skurwysyny mnie uwięziły, Rozjebie was małe kaleki, już rozkuć mnie. -Elf Jan: Nie Możemy cię wypuścić, jutro święta a ty masz depresje i wpadłeś w alkoholizm. Daj się przebrać i zrobić na bóstwo. -Mikołaj: Ni chuja wyglądam dobrze, a te małe skurwysyny dostaną rózgi, bo nikt we mnie nie wierzy... rozjebie te małe skurczybyki Elf Jan: Elfie kaktusie daj mu herbatnika",
  "Elf kaktus: Proszę mikołaju zjedz to. -Mikołaj: Omnom.... nie dotykać mnie zboczeńce Elf Jan: Elfie kaktusie trzeba mikołaja przygotować przed świętami a on nie chce się dać, trzeba go jakoś uspać i uzbierać pieniądze na pielęgnacje. -Elf kaktus: Alkohol go usypia ale jest on za drogi a pielęgnacja już o wiele za droga, co teraz zrobimy? -Elf Jan: Zwerbuj Elficzki dziwki żeby się puszczała na mieście a kase które zarobią niech nam oddają",
  "------ Zwerbuj Elficzke------",
  "Elf Kaktus: Kupiłem elfice Gnilde Elf Jan: Dobrze Teraz wyślij ja na miasto przyciskiem SEND",
  "Elf kaktus: Gnilda zapierdalaj na miasto się puszczać a kasa idzie do nas. Elfica Gnilda: Już już ide tylko mnie pewnie nikt nie zechce",
  "Elf kaktus: Kasa wchodzi elfie janie czas coś zorbić żeby zasnął, ale głodny tez nie zaśnie. -Elf Jan: Nakarm go za zarobione pieniądze i upij żeby zasnąła potem wykup dla niego pakiet pielęgnacyjny nr.1",
  "Elf Jan: Kaktusie mordo, musisz wysłaś dziwke na miasto żeby zarabiać Kesz ",
  "Elf Jan: Kaktusie nie stać nas na te elficzke",
  "Elf Jan: Kaktusie Musisz mieć dziwkę żeby ją wysłać, myśl kurna chłopie",
  "Mikołaj: Kurwa co wy robicie japierdole zboczeńcem ale sie wkurwiłem teraz na was ooo nie. Elf Jan: kaktusie co ty odjebałeś? Elf Kaktus: Chciałem Go wypielęgnować. Elf Jan: Mikołaj musi mieć wszystkie paski na full wtedy można. Elf Kaktus: A a a, to tak to działa",
  "Elf Jan: Wyślij dziwke zarób hajs"
];
function sleepness(){
  if(sleep <= 100){
    sleep += 5;
    document.getElementById("sleep").style.width = sleep+"%";
  }else if( sleep >= 100){
    sleep = 100;
    document.getElementById("sleep").style.width = "100%";
  }
}
function speaknow(a){
  let x = new SpeechSynthesisUtterance(a);
      x.lang = 'pl-PL';
      synth.speak(x);
}
function typing(a,b){
  if (i < `${storytell[b]}`.length){
    document.getElementById(a).innerHTML += `${storytell[b]}`.charAt(i);
    i++;
    setTimeout( () => typing( a, b ), 10 )
  }
}
function startgame(){
  document.getElementById("czatstart").innerHTML = "";
  speaknow(storytell[0]);
  typing("czatstart",0);
  document.getElementById('czatstart').removeAttribute("onclick");
}
function swebuy(a){
  if (money < sweet[a]){
    i = 0;
    document.getElementById('czatstart').innerHTML = "";
    speaknow(storytell[1]);
    typing("czatstart",1);
  }else if(money >= sweet[a]){
  if (hunger < 100 && happiness < 100){
    money -= sweet[a];
    sleepness();
    document.getElementById("money").innerHTML = money;
    hunger += sweethung[a];
    happiness += sweethapi[a];
    if(hunger >= 100){
      hunger = 100;
      document.getElementById("hunger").style.width = "100%";
    }else{
      document.getElementById("hunger").style.width = hunger+"%";
    }
    if(happiness >= 100){
      document.getElementById("happi").style.width = "100%";
    }else{
    document.getElementById("happi").style.width = happiness+"%";
    }
  }else if(hunger < 100 && happiness >= 100){
    money -= sweet[a];
    document.getElementById("money").innerHTML = money;
    happiness = 100;
    document.getElementById("happi").style.width = "100%";
    hunger += sweethung[a];
    if(hunger >= 100){
      hunger = 100;
      speaknow("Jestem pełny i szczęśliwy")
      document.getElementById("hunger").style.width = "100%";
    }else if(happiness < 100){
      document.getElementById("hunger").style.width = happiness+"%"; 
    }else{
      console.log("error");
    }
  }else if (hunger >= 100 && happiness < 100){
    money -= sweet[a];
    sleepness();
    document.getElementById("money").innerHTML = money;
    hunger = 100;
    document.getElementById("hunger").style.width = "100%";
    happiness += sweethapi[a];
    if(happiness >= 100){
      happiness = 100;
      speaknow("Jestem pełny i szczęśliwy")
      document.getElementById("happi").style.width = "100%";
    }else if(happiness < 100){
      document.getElementById("happi").style.width = happiness+"%"; 
    }else{
      console.log("error");
    }   
  }else if ( hunger >= 100 && happiness >= 100){
    hunger = 100;
    happiness = 100;
    speaknow("Jestem kurwa szczęśliwie najedzony wy jebane gnoje  nie chce więcej");
    document.getElementById("hunger").style.width = "100%";
    document.getElementById("happi").style.width = "100%";
  }else{
    console.log("error");
  }
  }else{
  console.log("error");
  }
  if (sweet[a] = 10 && storyconting[0] == 0){
    i = 0;
    storyconting[0] = 1;
    document.getElementById('czatstart').innerHTML = "";
    speaknow(storytell[1]);
    typing("czatstart",1);
  }
}
function alkbuy(a){
if (money < alco[a]){
  i = 0;
  document.getElementById('czatstart').innerHTML = "";
  speaknow(storytell[5]);
  typing("czatstart",5);
}else if(money >= alco[a]){
  if (drunk < 100 && happiness < 100){
    money -= sweet[a];
    sleepness();
    document.getElementById("money").innerHTML = money;
    drunk += alkdrunk[a];
    happiness += alkhapi[a];
    if(drunk >= 100){
      drunk = 100;
      document.getElementById("drunk").style.width = "100%";
    }else{
      document.getElementById("drunk").style.width = drunk+"%";
    }
    if(happiness >= 100){
      document.getElementById("happi").style.width = "100%";
    }else{
    document.getElementById("happi").style.width = happiness+"%";
    }
  }else if(drunk < 100 && happiness >= 100){
    money -= sweet[a];
    sleepness();
    document.getElementById("money").innerHTML = money;
    happiness = 100;
    document.getElementById("happi").style.width = "100%";
    drunk += alkdrunk[a];
    if(drunk >= 100){
      drunk = 100;
      speaknow("Jestem pełny i szczęśliwy")
      document.getElementById("drunk").style.width = "100%";
    }else if(happiness < 100){
      document.getElementById("drunk").style.width = happiness+"%"; 
    }else{
      console.log("error");
    }     
  }else if (drunk >= 100 && happiness < 100){
    money -= sweet[a];
    sleepness();
    document.getElementById("money").innerHTML = money;
    drunk = 100;
    document.getElementById("drunk").style.width = "100%";
    happiness += alkhapi[a];
    if(happiness >= 100){
      happiness = 100;
      speaknow("Jestem pełny i szczęśliwy")
      document.getElementById("happi").style.width = "100%";
    }else if(happiness < 100){
      document.getElementById("happi").style.width = happiness+"%"; 
    }else{
      console.log("error");
    }   
  }else if ( drunk >= 100 && happiness >= 100){
    drunk = 100;
    happiness = 100;
    speaknow("Jestem kurwa szczęśliwie Najebany Nie chce więcej chlać");
    document.getElementById("drunk").style.width = "100%";
    document.getElementById("happi").style.width = "100%";
  }else{
    console.log("error");
  }
}else{
  console.log("error");
}
}
function elfbuy(a){
  if (money < hookers_money[a]){
    i = 0;
    document.getElementById('czatstart').innerHTML = "";
    speaknow(storytell[6]);
    typing("czatstart",6);
  }else if(money >= hookers_money[a]){
    money -= hookers_money[a];
    document.getElementById("money").innerHTML = money;
    hookers_cnt[a] += 1;
    mps += hookers_mps[a];
    document.getElementsByClassName("elpric")[a].innerHTML = hookers_cnt[a];
    document.getElementById("mps").innerHTML = mps;
    sleepness();
  }else{
    console.log("error");
  }
  if (hookers_money[a] == 10 && storyconting[2] == 0){
    i = 0;
    storyconting[2] = 1;
    document.getElementById('czatstart').innerHTML = "";
    speaknow(storytell[3]);
    typing("czatstart",3);
  }
}
function send(){
  if((hookers_cnt[0]+hookers_cnt[1]+hookers_cnt[2]) == 0){
      i = 0;
      document.getElementById('czatstart').innerHTML = "";
      speaknow(storytell[8]);
      typing("czatstart",8);
  }
  money += mps;
  document.getElementById("money").innerHTML = money;
  if (hookers_cnt[0] == 1 && storyconting[3] == 0){
    i = 0;
    storyconting[3] = 1;
    document.getElementById('czatstart').innerHTML = "";
    speaknow(storytell[4]);
    typing("czatstart",4);
  }
}
function upgradesanta(){

  if(money >= santapricing[lvl]){
    if(hunger == 100 && drunk == 100 && happiness == 100 && sleep == 100){
      money -= santapricing[lvl];
      document.getElementById("money").innerHTML = money;
      lvl += 1;
      document.getElementById("mikol").src="images/Santa/"+(lvl+1)+".png";
      hunger = 0;
      drunk = 0;
      happiness = 0;
      sleep = 0;
      document.getElementById("lvl").innerHTML = lvl;
      document.getElementById("hunger").style.width = "0%";
      document.getElementById("drunk").style.width = "0%";
      document.getElementById("happi").style.width = "0%";
      document.getElementById("sleep").style.width = "0%";
      console.log("done 1");
    }else{ 
      i = 0;
      document.getElementById('czatstart').innerHTML = "";
      speaknow(storytell[9]);
      typing("czatstart",9);
      hunger = 0;
      drunk = 0;
      happiness = 0;
      sleep = 0;
      document.getElementById("hunger").style.width = "0%";
      document.getElementById("drunk").style.width = "0%";
      document.getElementById("happi").style.width = "0%";
      document.getElementById("sleep").style.width = "0%";
      console.log("error 2");
    }
  }else{
  i = 0;
  document.getElementById('czatstart').innerHTML = "";
  speaknow(storytell[10]);
  typing("czatstart",10);
}
}