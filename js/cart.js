// ======= Add To Cart - Start ======= //
let carts = document.querySelectorAll(".addToCartBtn");

let tours = [
    {
        name: "Gabala",
        tag: "gabala",
        price: 79,
        inCart: 0
    },
    {
        name: "Goygol",
        tag: "goygol",
        price: 87,
        inCart: 0
    },
    {
        name: "Zagatala",
        tag: "zagatala",
        price: 85,
        inCart: 0
    },
    {
        name: "Sheki",
        tag: "sheki",
        price: 55,
        inCart: 0
    },
    {
        name: "Lerik",
        tag: "lerik",
        price: 72,
        inCart: 0
    }
];


for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener("click", (e) => {
        e.preventDefault();
        cartNumbers(tours[i]);
        totalCost(tours[i]);
    });
}

function onLoadCartNumbers() {
    let tourNumbers = localStorage.getItem("cartNumbers");

    if (tourNumbers) {
        document.querySelector(".cart .tour-count").textContent = tourNumbers;
    }
}

function cartNumbers(tour) {
    let tourNumbers = localStorage.getItem("cartNumbers");

    tourNumbers = parseInt(tourNumbers);

    if (tourNumbers) {
        localStorage.setItem("cartNumbers", tourNumbers + 1);
        document.querySelector(".cart .tour-count").textContent = tourNumbers + 1;
    }else{
        localStorage.setItem("cartNumbers", 1);
        document.querySelector(".cart .tour-count").textContent = 1;
    }

    setItems(tour);
}

function setItems(tour) {
    let cartItems = localStorage.getItem("toursInCart");
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
        if (cartItems[tour.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [tour.tag]: tour
            }
        }
        cartItems[tour.tag].inCart += 1;
    }else{
        tour.inCart = 1;
        cartItems = {
            [tour.tag]: tour
        }
    }

    localStorage.setItem("toursInCart", JSON.stringify(cartItems));
}


function totalCost(tour) {
    let cartCost = localStorage.getItem("totalCost");

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + tour.price);
    }else{
        localStorage.setItem("totalCost", tour.price);
    }
}



function displayCart() {
    let cartItems = localStorage.getItem("toursInCart");
    cartItems = JSON.parse(cartItems);
    let tourContainer = document.querySelector(".tourContainer-inCart");
    let cartTotalPriceBox = document.querySelector(".cart-total-price");
    let cartCost = localStorage.getItem("totalCost");

    if (cartItems && tourContainer) {
        tourContainer.innerHTML = "";
        Object.values(cartItems).map(item => {
            tourContainer.innerHTML += `
                <tr class="tbody-row">
                    <!-- tour-img -->
                    <td>
                        <div class="tour-smallImg">
                            <img class="img-fluid" src="/img/tours/${item.tag}.jpg" alt="tour">
                        </div>
                    </td>
                    <!-- tour-name -->
                    <td class="tour-name">${item.name}</td>
                    <!-- tour-price -->
                    <td class="tour-price">
                        <div class="price-wrapper">
                            <i class="flaticon-dollar"></i>
                            <span>${item.price}</span>
                        </div>
                    </td>
                    <!-- increase or decrease the quantity -->
                    <td>
                        <div class="tour-amount"">
                            <span class="amount">${item.inCart}</span>
                        </div>
                    </td>
                    <!-- total-price -->
                    <td class="total-price tour-total-price">
                        <div class="price-wrapper">
                            <i class="flaticon-dollar"></i>
                            <span class="price">${item.inCart * item.price}</span>
                        </div>
                    </td>
                    <!-- remove-btn -->
                    <td class="remove-tour">
                        <a href="#"><i class="fas fa-times"></i></a>
                    </td>
                </tr>
            `;
        });


        cartTotalPriceBox.innerHTML += `${cartCost}`;
    }
}

onLoadCartNumbers();
displayCart();
// ======= Add To Cart - End ======= //