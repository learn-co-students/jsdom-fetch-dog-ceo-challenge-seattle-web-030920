let breeds = []

function loadImages() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl)
  .then(res => res.json())
  .then(results => {
    results.message.forEach(image => addImage(image))
  })
}

function addImage(dogPic) {
  let container = document.querySelector('#dog-image-container');
  let newImgTag = document.createElement('img');
  newImgTag.src = dogPic;
  container.appendChild(newImgTag);
}

function loadBreed() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch(breedUrl)
  .then(res => res.json())
  .then(results => {
    breeds = Object.keys(results.message)
    updateBreed(breeds)
    addBreedListener();
  });
}

function updateBreed(breeds) {
  let ul = document.querySelector('#dog-breeds')
  removeChildren(ul)
  debugger
  breeds.forEach(breed => addBreed(breed));
}

function addBreed(breed) {
  let ul = document.querySelector('#dog-breeds');
  let li = document.createElement('li');
  li.innerText = breed;
  ul.appendChild(li)
  li.addEventListener('click', updateColor)
}

function updateColor(event) {
  event.target.style.color = 'DarkKhaki'
}

function addBreedListener() {
  let breedDropdown = document.querySelector('#breed-dropdown')
  breedDropdown.addEventListener('change', function(event) {
    selectBreeds(event.target.value)
  })
}

function selectBreeds(letter) {
  updateBreed(breeds.filter(breed => breed.startsWith(letter)))
}

function removeChildren(element) {
  let child = element.lastElementChild;
  while(child) {
    element.removeChild(child)
    child = element.lastElementChild
  }
}

document.addEventListener('DOMContentLoaded', function () {
  loadImages();
  loadBreed();
});