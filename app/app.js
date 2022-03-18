let wordArray = ['developer', 'author', 'company', 'contact', 'word', 'name', 'wither', 'mountain', 'project', 'programmer', 'organization', 'authintication']



let words = document.querySelector('.word');
let inputFeald = document.querySelector('input');
let time = document.querySelector('#time');
let score = document.querySelector('#score');
let button = document.querySelector('#btn');
let state = document.querySelector('.status');

let sconde = 5;

let random = () =>{
    let num = Math.floor(Math.random() * wordArray.length);
     words.innerHTML = wordArray[num]
}

window.onload = () => {
    random();
    newGame()
}

let addScore = () =>{
    score.innerText++
}
let newGame = () =>{
    setInterval(countDown, 1000);
    
}


function countDown() {
    if(sconde > 0){
        sconde--;
    }else if( sconde === 0){
        state.innerText = 'game over!!!';
        score.innerText = 0
    }

    time.innerText = sconde
}



 inputFeald.addEventListener('input', () => {
     if(inputFeald.value === words.innerHTML){
         state.style.color = 'rgb(10, 214, 10)'
         state.innerText = 'correct';
         inputFeald.value = '';
         random()
         addScore()
         sconde = 5
     }else{
        state.style.color = 'red'
        state.innerHTML = 'wrong'
     }
 });

 
 button.addEventListener('click', change);