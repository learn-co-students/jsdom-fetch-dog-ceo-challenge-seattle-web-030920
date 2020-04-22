console.log('%c HI', 'color: firebrick')
const imgContainer = document.getElementById("dog-image-container")
const breedUl = document.getElementById("dog-breeds")

function fetchImages(){
return fetch('https://dog.ceo/api/breeds/image/random/4')
.then(res => res.json())
.then(json =>creatImgs(json.message))
}

function creatImgs(imgs){
   imgs.forEach( img =>{
    const image = document.createElement("img")
    image.src = img
   
    imgContainer.appendChild(image)
})
}
fetchImages()

function fetchBreeds(){
    return fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(json => creatBreeds(json.message))
    }
    function creatBreeds(breeds){
        breeds = Object.keys(breeds)
        breeds.forEach( br =>{
        const breed = document.createElement("li")
        breed.innerText = br
        breedUl.appendChild(breed)
    })
    }
    fetchBreeds()