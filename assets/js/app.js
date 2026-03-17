// looper igennem data'en og overskriver det med innerHTML 

// fetch("./assets/js/watchesJson.json")
// .then(res => res.json())
// .then(data => {
//     const productEl = document.querySelector(".products")
//     data.watches.forEach(watch => {
 
//         const div = document.createElement("div")
//         div.classList.add("product")
 
//         div.innerHTML = `
//         <img src="./assets/img/${watch.imgUrl}" alt="${watch.name}">
//         <h3 class="product-title">${watch.name}</h3>
//         <p>${watch.price}</p>
//         <p>${watch.description}</p>
//         <button>Tilføj til kurv <i class="fa-solid fa-cart-plus"></i>
//         </button>
//         `;
 
//         productEl.appendChild(div)
//         })
//     })
// .catch(err => (err))


// Tilføjet funktionalle knapper sådan at når man klikker på produkterne, så vises den på indkøbskruven

// fetch("./assets/js/watchesJson.json")
//   .then(res => res.json())
//   .then(data => {
//     const productEl = document.querySelector(".products")
//     const cartEl = document.querySelector(".cart")

//     data.watches.forEach(watch => {
//       const div = document.createElement("div")
//       div.classList.add("product")

//       div.innerHTML = `
//         <img src="./assets/img/${watch.imgUrl}" alt="${watch.name}">
//         <h3 class="product-title">${watch.name}</h3>
//         <p>${watch.price} DKK</p>
//         <p>${watch.description}</p>
//         <button>Tilføj til kurv <i class="fa-solid fa-cart-plus"></i></button>
//       `

//       // Tilføj klik-event på knappen
//       const button = div.querySelector("button")
//       button.addEventListener("click", () => {
//         // Opret et nyt element til indkøbskurven
//         const cartItem = document.createElement("div")
//         cartItem.classList.add("cart-item")
//         cartItem.innerHTML = `
//           <p>${watch.name} - ${watch.price} DKK</p>
//         `
//         cartEl.appendChild(cartItem)
//       })

//       productEl.appendChild(div)
//     })
//   })
//   .catch(err => console.log("Der skete en fejl: " + err))


// regner total pris, når man klikker på produkterne 
fetch("./assets/js/watchesJson.json")
  .then(res => res.json())
  .then(data => {
    const productEl = document.querySelector(".products")
    const cartEl = document.querySelector(".cart")

    let totalPrice = 0; // Her holder vi styr på totalen
    const totalEl = document.createElement("p") // Element til at vise totalen
    totalEl.classList.add("total")
    totalEl.textContent = `Total: ${totalPrice} DKK`
    cartEl.appendChild(totalEl)

    data.watches.forEach(watch => {
      const div = document.createElement("div")
      div.classList.add("product")

      div.innerHTML = `
        <img src="./assets/img/${watch.imgUrl}" alt="${watch.name}">
        <h3 class="product-title">${watch.name}</h3>
        <p>${watch.price} DKK</p>
        <p>${watch.description}</p>
        <button>Tilføj til kurv <i class="fa-solid fa-cart-plus"></i></button>
      `

      const button = div.querySelector("button")
      button.addEventListener("click", () => {
        // Tilføj produkt til kurven
        const cartItem = document.createElement("div")
        cartItem.classList.add("cart-item")
        cartItem.innerHTML = `<p>${watch.name} - ${watch.price} DKK</p>`
        cartEl.insertBefore(cartItem, totalEl) // indsæt over totalen

        // Opdater totalen
        totalPrice += watch.price
        totalEl.textContent = `Total: ${totalPrice} DKK`
      })

      productEl.appendChild(div)
    })
  })
  .catch(err => console.log("Der skete en fejl: " + err))