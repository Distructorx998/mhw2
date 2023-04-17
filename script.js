let risposte = {};

let flag1= false;
let flag2= false;
let flag3= false;

function onClick(event){
    const banana= event.currentTarget;
    const image=  banana.querySelector('img.checkbox');
    const id = (banana.dataset.questionId);

    const boxes = document.querySelectorAll ('[data-question-id=' + id + ']') ;
    for (box of boxes){
        box.classList.add("overlay");
        box.classList.remove("cliccato");
        box.querySelector('.checkbox').src= './images/unchecked.png';
    }

    if (id === 'one') {
        flag1=true;
    }
    if (id === 'two')
    {
        flag2=true;
    }
    if (id === 'three')
    {
        flag3=true;
    }
        const message = (banana.dataset.choiceId);
        risposte[id]=message;
    
    image.src= './images/checked.png';
    banana.classList.add("cliccato");
    banana.classList.remove("overlay");

//    if(risposte['one']!==undefined&&risposte['two']!==undefined&&risposte['three']!==undefined)

        const elements= document.querySelectorAll('.choice-grid div')
        if (flag1 ===true && flag2 ===true && flag3=== true)
    {       
            for (const element of elements){
           element.removeEventListener('click', onClick);
}
        invia();

    }

}
const boxes = document.querySelectorAll ('.choice-grid div');
for (let box of boxes){
    box.addEventListener('click', onClick);
}

function invia(){

    const art = document.querySelector('article');  
    const div = document.createElement('div');  
    const title = document.createElement('h1');
    const contents = document.createElement('span');
    const button = document.createElement('button');

    const one= risposte['one'];
    const two= risposte['two'];
    const three= risposte['three'];

    art.appendChild(div);
    div.classList.add("fine");

    if (two === three){
    title.textContent= RESULTS_MAP[two]['title'];
    contents.textContent= RESULTS_MAP[two]['contents'];
    div.appendChild(title);
    div.appendChild(contents);
    }
    else {
    title.textContent= RESULTS_MAP[one]['title'];
    contents.textContent= RESULTS_MAP[one]['contents'];
    div.appendChild(title);
    div.appendChild(contents);
    }

    button.textContent= 'Ricomincia Quiz';
    div.appendChild(button);

    const bottone = document.querySelector('.fine button');
    bottone.addEventListener("click", refresh);
}

function refresh ()
{
    const boxes = document.querySelectorAll ('.choice-grid div');
    for (let box of boxes){
        box.addEventListener('click', onClick);
        box.classList.remove("overlay");
        box.classList.remove("cliccato");
        box.querySelector('.checkbox').src= './images/unchecked.png';

    }
    const div= document.querySelector('.fine');
    div.remove();

    flag1=false;
    flag2=false;
    flag3=false;
}


