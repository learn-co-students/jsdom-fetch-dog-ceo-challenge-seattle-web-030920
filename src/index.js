console.log('%c HI', 'color: firebrick')
fetchImgHandler()
fetchBreedHandler().then(json => displayBreeds(json))


// globale var
const dogBreeds = document.getElementById("dog-breeds")

const dropdownMenu = document.getElementById("breed-dropdown")


// event listener --> does it need to be outside of a function if you want it to be reoccurring ? or was adding the function(e) what did it ?
// dropdownMenu.addEventListener("change", filterHandler(dropdownMenu.value)) vs. the code below 

dropdownMenu.addEventListener("change", function(e) {

    filterHandler(dropdownMenu.value)

})
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
    
    for (const breed of breeds) {
        let li = document.createElement("li") 
        li.innerText = breed 
        li.addEventListener("click", function(e) {
            li.style.color = "green"
        })

        dogBreeds.appendChild(li)
    }
    return breeds
}


// handlers 
 
function filterHandler(selected) {
    let breeds = dogBreeds.children
    
    
    // let results = breeds.filter(liElement => liElement.innerText[0] == selected) #didn't work because breeds does not behave as an array (even though [] notation works)

    for (const liElement of breeds) {
        // removes the style property of liElement prior to the if statement --> reloads single breed into the DOM then checks if the breed matches the condition

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