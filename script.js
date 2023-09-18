const container = document.querySelector('.container')

const fetchAndDisplayPets =(animal)=>{
  fetch('https://learnwebcode.github.io/pet-adoption-data/pets.json')
.then(res=>res.json())
.then(data=>{
  let result;
  if(animal){
    result = data.filter(item=>item.species===animal)
  }else{
    result = data;
  }
    const pets = result.map(item=>{
        return `<div class="card">
        <img class="photo" src="${item.photo}">
          <div class="info">
            <p id="name">Name: <span>${item.name}</span></p>
            <p id="species">Kind: <span>${item.species}</span></p>
          </div>
        </div>`
    })
    container.innerHTML = pets.join('')
})
.catch(error=>{
    console.log(error)
})
}
fetchAndDisplayPets();





