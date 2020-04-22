console.log('%c HI', 'color: firebrick')
fetchImgHandler()
fetchBreedHandler().then(json => displayBreeds(json))


// fetchBreedHandler().then(json => filterHandler(json))

// globale var
const dogBreeds = document.getElementById("dog-breeds")

const dropdownMenu = document.getElementById("breed-dropdown")

dropdownMenu.addEventListener("change", function(e) {


    filterHandler(dropdownMenu.value)



})
// filterBreed()
// Dom building 


function displayImages(json) {
    let imgs = json.message 
    const dogList = document.getElementById("dog-image-container")

    for (const img of imgs) {
        let imgTag = document.createElement("img")
       
        imgTag.src = img 

        dogList.appendChild(imgTag)
    }
    
}

function displayBreeds(json) {
    let breeds = Object.keys(json.message) 
    // const dogBreeds = document.getElementById("dog-breeds")
    
    for (const breed of breeds) {
        let li = document.createElement("li") 
        li.innerText = breed 
        // li.style.removeProperty("display")
        li.addEventListener("click", function(e) {
            li.style.color = "green"
        })

        dogBreeds.appendChild(li)
    }
    return breeds
}

// function filterBreed() {


//     dropdownMenu.addEventListener("change", filterHandler(dropdownMenu.value))
// }


// handlers 
 
function filterHandler(selected) {
    let breeds = dogBreeds.children
    
    
    // let results = breeds.filter(liElement => liElement.innerText[0] == selected)

    for (const liElement of breeds) {
        liElement.style.removeProperty("display")
        if (!(liElement.innerText[0] == selected)) {
            
            liElement.style.display = "none"
        } 
    }

}

function fetchBreedHandler(){
    return fetch("https://dog.ceo/api/breeds/list/all")
    .then(resp => resp.json())
    .then(json => json)
}


function fetchImgHandler(){
    return fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json => {displayImages(json)})
}