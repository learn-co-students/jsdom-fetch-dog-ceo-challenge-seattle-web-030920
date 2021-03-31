// let breeds = []

document.addEventListener('DOMContentLoaded', function(){

    fetchImg()
    fetchBreeds()
    
})

function fetchImg(){
    const myFetch = "https://dog.ceo/api/breeds/image/random/4"
    fetch(myFetch)
    .then(res => res.json())
    .then(res => {
        res.message.forEach(image => addImg(image))
    })
}

function addImg(ozzies){
    const getId = document.getElementById("dog-image-container")
    const createId = document.createElement("img")
    createId.src = ozzies
    getId.appendChild(createId)
}

function fetchBreeds(){
    //fetch todas as breeds
     const breedUrl = 'https://dog.ceo/api/breeds/list/all'
     fetch(breedUrl)
     //converte a informacao a json(so humans can read)
     .then(res => res.json())
     .then(json => {
        //pega essa info em formato json e coloca dentro de um array Object.keys nome = breeds
        //associa o json a message(nome do objeto que queremos manipular/mostrar atraves de dot notation)
          breeds = Object.keys(json.message)
          //essa funcao "pega" o node/html
          //e depois para cara item/element(forEach (output each element inside array)) 
          //lembrando que a este ponte o json foi convertido a um array(Object.keys) 
                 updateBreedList(breeds)
                 addBreedSelectListener();
    })
}

function updateBreedList(breeds) {
    let ul = document.querySelector('#dog-breeds');
    //addBreed esta pegando o elemento/node no DOM--cria um novo li
    //associa o novo li innerText a breed(parametro)
    //depois append o novo li ao node do html
    removeChildren(ul);
    breeds.forEach(breed => addBreed(breed));
    
  }

function addBreed(breed){
    //comentarios acima
    const getBreedId = document.getElementById("dog-breeds")
    const createLi = document.createElement('li')
    createLi.innerText = breed
    createLi.style.cursor = 'pointer';
    getBreedId.appendChild(createLi)
    createLi.addEventListener('click', changeColor)
}

function changeColor(word){
    //target se refere ao array(que mudara a cor ao click que foi referido acima pelo pointer)
 word.target.style.color = 'palevioletred'
}

function removeChildren(element) {
    //o que eh lastelement?
    let child = element.lastElementChild;
    while (child) {
      element.removeChild(child);
      child = element.lastElementChild;
    }
  }

function selectBreedsStartingWith(letter) {
    updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
  }
  
  function addBreedSelectListener() {
    let breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', function (event) {
      selectBreedsStartingWith(event.target.value);
    });
  }