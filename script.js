const submitButton = document.querySelector('.submit-btn');
const container = document.querySelector('.container'); 

const button1 = document.querySelector('.btn1');
const button2 = document.querySelector('.btn2');
const button3 = document.querySelector('.btn3');
const button4 = document.querySelector('.btn4');
const button5 = document.querySelector('.btn5');

const hiddenDiv = document.querySelector('.hidden-div');

const rattingNum = document.querySelector('.result-p')


submitButton.addEventListener('click', resultFunction); 

function resultFunction(){
    container.innerHTML="";
    container.appendChild(hiddenDiv);
    hiddenDiv.classList.add('not-hidden-anymore');
}

button1.addEventListener('click', rated1);

function rated1(){
    rattingNum.innerHTML= "You selected 1 out of 5"
    
    button1.style.background ="hsl(25, 97%, 53%)";
    button1.style.border  =" 1px solid hsl(25, 97%, 53%)";
}

button2.addEventListener('click', rated2);

function rated2(){
    rattingNum.innerHTML= "You selected 2 out of 5"
    
    button2.style.background ="hsl(25, 97%, 53%)";
    button2.style.border  =" 1px solid hsl(25, 97%, 53%)";

}
button3.addEventListener('click', rated3);

function rated3(){
    rattingNum.innerHTML= "You selected 3 out of 5"
    
    button3.style.background ="hsl(25, 97%, 53%)";
    button3.style.border  =" 1px solid hsl(25, 97%, 53%)";
}
button4.addEventListener('click', rated4);

function rated4(){
    rattingNum.innerHTML= "You selected 4 out of 5"
    
    button4.style.background ="hsl(25, 97%, 53%)";
    button4.style.border  =" 1px solid hsl(25, 97%, 53%)";
}
button5.addEventListener('click', rated5);

function rated5(){
    button5.style.background ="hsl(25, 97%, 53%)";
    button5.style.border  =" 1px solid hsl(25, 97%, 53%)";
    rattingNum.innerHTML= "You selected 5 out of 5"
}
