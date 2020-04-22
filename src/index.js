
console.log('%c HI', 'color: firebrick')



const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener("DOMContentLoaded", function(e){
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json =>  { json.message.forEach ( img => addImages(img))})
    let breeds =  []
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json =>  {breeds = Object.keys(json.message)
    addBreeds(breeds)})
    const select =  document.getElementById("breed-dropdown")
    select.addEventListener("change", function(e){
        let letter = e.target.value 
       let newBreeds = breedFilter(breeds, letter)
       addBreeds(newBreeds)
    })

})

function addBreeds(breeds){
const ul =  document.getElementById("dog-breeds")
ul.innerText = ""
breeds.forEach(breed => makeli(breed))
}

function makeli(breed){
    const li =  document.createElement("li")
    li.innerText = breed  
    const ul =  document.getElementById("dog-breeds")
    ul.appendChild(li)
    li.addEventListener("click", function(e){
        e.target.style.color = 'green'
    })
}

function addImages(img_url){
    const image =  document.createElement("img")
    image.src = img_url 
    const div =  document.getElementById("dog-image-container")
    div.appendChild(image)


}

function breedFilter(breeds, letter){
   return breeds.filter(breed => breed[0] == letter)
    
}

