// With Cindy Zheng 
 
console.log('%c HI', 'color: firebrick')
const imgContainer = document.getElementById("dog-image-container")
const breedUl = document.getElementById("dog-breeds")
let breeds =[]
//get dogs pictures
function fetchImages(){
return fetch('https://dog.ceo/api/breeds/image/random/4')
.then(res => res.json())
.then(json =>creatImgs(json.message))
}

// create image tags and assign src to it
function creatImgs(imgs){
   imgs.forEach( img =>{
    const image = document.createElement("img")
    image.src = img
    imgContainer.appendChild(image)
})
}
//get breeds api and create list with click event
function fetchBreeds(){
    return fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(json => getBreedsName(json.message))
    }

    function getBreedsName(rawBreeds){
        breeds = Object.keys(rawBreeds)
        creatBreeds(breeds)
    }

    function creatBreeds(breedsNames){
        breedsNames.forEach( br =>{

            const breed = document.createElement("li")
            breed.innerText = br
            
            breed.addEventListener("click",changeColor )
            breedUl.appendChild(breed)
        })
    }
    //change color after click
    function changeColor(e){
        e.target.style.color = "blue"
    }

    //call the functions to run  


    function filterMatchBreed(){
        const choices = document.getElementById("breed-dropdown")
        choices.addEventListener("change", function(e){
          
           let letterChosen = e.target.value;
           let chosenBreeds = breeds.filter(name => name[0]==letterChosen)
            breedUl.innerHTML =""
            creatBreeds(chosenBreeds)
              
        })
    }
    
   
    document.addEventListener('DOMContentLoaded',function(){
        fetchImages() 
        fetchBreeds()
        filterMatchBreed() 
    })  