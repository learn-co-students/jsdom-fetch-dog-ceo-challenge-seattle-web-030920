console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener("DOMContentLoaded", function() {
loadImages()
loadDogBreeds()
})

function loadImages() {
   fetch(imgUrl)
    .then(resp => resp.json())
    .then(json =>  { json.message.forEach ( img => addImage(img))
    })
} 

function addImage(img) {
        let image=document.createElement("img")
        image.src=img
        let div= document.getElementById("dog-image-container")
        div.appendChild(image)
}

let breeds= []

function loadDogBreeds() {
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json =>  {breeds = Object.keys(json.message)
    updateBreedList(breeds)
    document.getElementById('breed-dropdown').addEventListener('change', function (event) {
        BreedsStartingWith(event.target.value);
    })
})} 

function updateBreedList(breeds) {
    let ul = document.getElementById('dog-breeds')
    ul.innerHTML = ""
    breeds.forEach(breed => addBreed(breed))
}

function addBreed(breed) {
    let ul = document.querySelector('#dog-breeds')
    let li = document.createElement('li')
    li.innerText = breed
    li.style.cursor = 'pointer';
    ul.appendChild(li)
    li.addEventListener('click', updateColor)
}

function updateColor(event) {
    event.target.style.color = 'red'
}

function BreedsStartingWith(letter) {
    updateBreedList(breeds.filter(breed => breed.startsWith(letter)))
  }