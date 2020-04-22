console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function () {
    // loadImages();
    loadBreeds();
})

function loadImages() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(resp => resp.json()
        .then(results => {
            results.message.forEach(image => addImage(image))
        })
    )
}

function addImage(imageURL) {
    const container = document.getElementById("dog-image-container")
    const newImage = document.createElement("img")
    newImage.src = imageURL
    container.appendChild(newImage)
}

function loadBreeds(params) {
    fetch("https://dog.ceo/api/breeds/list/all")
        .then(resp => resp.json()
        .then(results => {
            breeds = Object.keys(results.message);
            updateBreedList(breeds);
            addBreedSelector();
        })
    )
}

function updateBreedList(breeds) {
    let ul = document.querySelector('#dog-breeds');
    removeChildren(ul);
    breeds.forEach(breed => addBreed(breed));
}

function addBreed(breed) {
    const breedList = document.getElementById("dog-breeds")
    const breedLi = document.createElement("li")
    breedLi.textContent = breed
    breedLi.style.cursor = 'pointer';
    breedList.appendChild(breedLi)
    breedLi.addEventListener("click", function(e) {
        e.target.style.color = "palegreen"
    })
}

function addBreedSelector() {
    const breedMenu = document.getElementById("breed-dropdown");
    breedMenu.addEventListener('change', function (event) {
        selectBreedsWith(event.target.value);
    });
}

function selectBreedsWith(letter) {
    updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
}

function removeChildren(element) {
    let child = element.lastElementChild;
    while (child) {
        element.removeChild(child);
        child = element.lastElementChild;
    }
}
