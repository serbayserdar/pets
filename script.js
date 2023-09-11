const container = document.querySelector('.container')

fetch('https://learnwebcode.github.io/pet-adoption-data/pets.json')
.then(res=>res.json())
.then(data=>{
    const allPets = data.map(item=>{
        return `<div class="card">
        <img class="photo" src="${item.photo}">
          <div class="info">
            <p id="name">Name: <span>${item.name}</span></p>
            <p id="species">Kind: <span>${item.species}</span></p>
          </div>
        </div>`
    })
    container.innerHTML = allPets.join('')
})
.catch(error=>{
    console.log(error)
})