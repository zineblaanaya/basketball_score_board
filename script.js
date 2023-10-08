let homeCount = 0;
let guestCount = 0;


function addOnePoint (){
    homeCount +=1;
    let homeCountEl = document.getElementById('homeCount');
    homeCountEl.textContent = homeCount;
    
}

function addTwoPoint (){
    homeCount +=2;
    let homeCountEl = document.getElementById('homeCount');
    homeCountEl.textContent = homeCount;
    
}
function addThreePoint (){
    homeCount +=3;
    let homeCountEl = document.getElementById('homeCount');
    homeCountEl.textContent = homeCount;
    
}

function addOnePointGuest (){
    guestCount +=1;
    let guestCountEl = document.getElementById('guestCount');
    guestCountEl.textContent = guestCount;
    
}

function addTwoPointGuest (){
    guestCount +=2;
    let guestCountEl = document.getElementById('guestCount');
    guestCountEl.textContent = guestCount;
    
}

function addThreePointGuest (){
    guestCount +=3;
    let guestCountEl = document.getElementById('guestCount');
    guestCountEl.textContent = guestCount;
    
}


function reset (){

let homeCount = 0;
let guestCount = 0;

let homeCountEl = document.getElementById('homeCount');
let guestCountEl = document.getElementById('guestCount');

homeCountEl.textContent = homeCount;
guestCountEl.textContent = guestCount;


}