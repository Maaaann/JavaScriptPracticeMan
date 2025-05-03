let container = document.createElement('div');
document.body.appendChild(container);
container.style.textAlign = 'center'

function element(){

    //elements
    let card = document.createElement('div');
    let title = document.createElement('h2');
    let age = document.createElement('p');
    let img = document.createElement('img');
    
    // content
    let head = document.createTextNode('title')
    let ageContent = document.createTextNode('age')
    img.src = './V8.png'

    title.appendChild(head);
    age.appendChild(ageContent);
    
    card.appendChild(title);
    card.appendChild(age);
    card.appendChild(img);

    container.appendChild(card);
}

element()