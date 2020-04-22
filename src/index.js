const imgDiv = document.getElementById("dog-image-container")

const breedList = document.getElementById("dog-breeds")

const breedMenu = document.getElementById("breed-dropdown")

function getImgs() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then( res => res.json() )
        .then( json => json.message.forEach( img => addImg(img) ) )
}

function addImg(dogURL) {
    let dogImg = document.createElement("img")
    dogImg.src = dogURL
    imgDiv.appendChild(dogImg)
}

function getBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
        .then( res => res.json() )
        .then( json => {
            breeds = Object.keys(json.message)
            breedUpdate(breeds)
            addBreedSelector()
        })
}

function addBreed(breed) {
    let breedLi = document.createElement("li")
    breedLi.textContent = breed
    breedList.appendChild(breedLi)

    breedLi.addEventListener("click", function(e) {
        breedLi.style.color = "palegreen"
    })
}

function breedUpdate(breeds) {
    let child = breedList.lastElementChild;
    while (child) {
        breedList.removeChild(child);
        child = breedList.lastElementChild;
    }
    breeds.forEach( breed => addBreed(breed) )
}

function addBreedSelector() {
    breedMenu.addEventListener("change", function(e) {
        selectBreeds(breedMenu.value)
    })
}

function selectBreeds(letter) {
    breedUpdate( breeds.filter( breed => breed.startsWith(letter) ) )
}

//getImgs()
getBreeds()