const baseURL = "https://hp-api.onrender.com/api/characters";
const sideBarList = document.querySelector(".characters")
const menu = document.querySelector(".menu");
const title = document.querySelector(".h1")

function getData() {
    fetch(baseURL)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      // console.log(data[0].name, data[0].wand, data[0].house, data[0].image)
      // console.log(data[1].name, data[1].wand, data[1].house, data[1].image)
      // console.log(data[2].name, data[2].wand, data[2].house, data[2].image)
      // console.log(data[30].name, data[30].wand, data[30].house, data[30].image)
      // console.log(data[16].name, data[16].wand, data[16].house, data[16].image)
      setupSidebar(data)
    })
    .catch(error => console.log('error', error)
    );
}

getData()

title.addEventListener("mouseover", displayTitle)
function displayTitle(){
  title.classList.toggle("h1")
}

menu.addEventListener("click", handleMenu)

function handleMenu(){
  menu.classList.toggle('opened') 
  sideBarList.classList.toggle("menu-display")
  displayTitle()
}

/* Everytime you need the program to do something create a function-
 - Everytime you need an event to do something you 
   Create a callback function either listening for the targeted event
   or referencing another function
*/

function setupSidebar(characters) {
  for (let i = 0; i < 10 ;i++) {
    let characterListName = `<li class="character">${characters[i].name}</li>`
    sideBarList.insertAdjacentHTML("beforeend", characterListName)
  }

  let charactersLiTags = document.querySelectorAll(".character")

  charactersLiTags.forEach((tag, i)=>{
    tag.addEventListener("click", () => displayCharacter(characters[i]))
  })
}


// 

function displayCharacter(character){
  let characterDiv = document.querySelector(".char-info")
/* template literals / template strings are a great way to interpolate
   HTML elements with the DOM
*/
  let characterInfo = `
    <h1>${character.name}</h1>
    <h2>House: ${character.house}</h2>
    <div>
      <h3>Wand Details:</h3>
      <ul>
        <li>Core: ${character.wand.core}</li>
        <li>Length: ${character.wand.length}</li>
        <li>Wood: ${character.wand.wood}</li>
      </ul>
    </div>
    <img src="${character.image}" alt="${character.name}">
  `

  // Clears the inner HTML after each text insertion
  characterDiv.innerHTML = ""

  // Appends character info to the end 
  characterDiv.insertAdjacentHTML("beforeend", characterInfo)
  handleMenu()
}









