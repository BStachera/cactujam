function chatinfo(x){
    if( x == 1){
        document.getElementById('chat').innerHTML = chat_message[1];
        document.getElementById('magnetio').src="images/magnet/2.png";
        energy += 10;
        document.getElementById('energy_cnt').innerHTML = energy;
        document.getElementById('checkerp').style.visibility = "hidden";
        document.getElementById('checkerm').style.visibility = "hidden";

    } else if( x == 0){
        document.getElementById('chat').innerHTML = chat_message[2];
        document.getElementById('magnetio').src="images/magnet/0.png";      
        document.getElementsByClassName('btn')[0].style.visibility = "hidden";
        document.getElementsByClassName('btn')[1].style.visibility = "hidden";
        setTimeout("location.href = 'https://www.thespruceeats.com/thmb/baY0uvKFvdBu2EGMy8mQiPyvbkA=/3315x2483/filters:no_upscale():max_bytes(150000):strip_icc()/prickly-pear-cactus-growing-against-sky-680876127-582c787c5f9b58d5b1b4924f.jpg';",5000);
    }else{
        console.log("error kurde");
    }
}