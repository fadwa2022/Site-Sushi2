let navbar = document.querySelector('.navbar');
var Total = 0;

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}
/* creat table */
// let button =document.getElementsByClassName('prix') 
// let prix = [10.99, 13.99, 15.99, 15.99, 19.99,11.99];
// let nom =["Tasty And Healty","Tasty And Healty","Tasty And Healty","Tasty And Healty"];
// totalPrice = 0
// let prixButtons = document.querySelectorAll('.prix');
// prixButtons.forEach(function(button) {
//     button.addEventListener('click', function(e){
//         e.preventDefault();
//         let id = button.getAttribute('id');
//         let span = document.createElement('span')
//         let name = document.createElement('h2')
//         let price = document.createElement('h2')
//         name.textContent = nom[id]
//         price.textContent = prix[id].toFixed(2) + '$'
//         span.append(name,price)
//         span.classList.add('prod')
//         let total = document.querySelector('.heading1')
//         let heads = document.querySelector('.heads')
//         console.log(total);
//         heads.append(span)
//         let totalElement = total.querySelector('.pricee')
//         totalPrice += prix[id]
//         totalElement.textContent = totalPrice.toFixed(2)+ '$'

//     })
// })

function addPlat(prix,name){
    var product = document.getElementsByClassName('prduct')
    console.log('fadwa');
    product.innerHTML+=`
    <div id="part4" class="heads">
          <span class="prod">
            <h2 id="h2">${name}</h2>
            <h2 id="h2">${prix}$</h2>
          </span>
        </div>`

    }

function myFunction(){
    alert("commande confirmée")
}

