function chatinfo(x){
    if( x == 1){
        document.getElementById('chat').innerHTML = chat_message[1];
        document.getElementById('magnetio').src="images/magnet/2.png";
    } else if( x == 0){
        document.getElementById('chat').innerHTML = chat_message[2];
        document.getElementById('magnetio').src="images/magnet/0.png";
    }else{
        console.log("error kurde");
    }
}