let hidden = true;
let msg = "Tu es un tricheur";

let btn = document.querySelector('#btn');

function spoil() {
    
    if(hidden){
        document.body.innerHTML += msg;
        btn.innerHTML = "<button id='btn'>Cacher</button>";
        hidden = false;
    }
    else {
        msg.remove;
        btn.innerHTML = "<button id='btn'>Afficher</button>";
        hidden = true;
    }
}



btn.addEventListener('click',spoil);


