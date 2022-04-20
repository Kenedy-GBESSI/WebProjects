let nam = document.getElementById('name');
let num = document.getElementById('number');
let image = document.getElementById('image');
const getImage = async () =>{
    let id = Math.ceil(Math.random()*171 + 1);
    let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    let data = await fetch(url);
    let response = await data.json();
    image.src = response.sprites.front_default;
    num.textContent = `#${response.id}`;
    nam.textContent = response.name;
    console.log(response);
}
document
.getElementById('button')
.addEventListener('click',getImage);