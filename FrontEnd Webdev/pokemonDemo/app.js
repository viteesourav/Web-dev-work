// pokemon url: https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png  --> ranges from 1 to 151.

const section = document.querySelector('section');
const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

for(let i=1;i<=151;i++) {
    const div = document.createElement('div');
    div.classList.add('pokemon');
    const newImg = document.createElement('img');
    const span = document.createElement('span');
    newImg.src = `${baseUrl}${i}.png`;
    span.append(`#${i}`);
    div.appendChild(newImg);
    div.appendChild(span);
    section.appendChild(div);
}
