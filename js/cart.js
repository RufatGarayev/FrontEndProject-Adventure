// =======  Cart - Start  ======= //
// taking "add-to-cart" btn
let addToCart = document.querySelectorAll(".addToCartBtn");

// setting local storage
if (localStorage.getItem("cart") == null) {
  localStorage.setItem("cart", JSON.stringify([]));
}

addToCart.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    // taking tour elements
    let id = $(this).parent().parent().parent().attr("data-id");
    let image = $(this).parent().parent().siblings(".img-box").children().attr("src");
    let name = $(this).parent().siblings().find("h4").text();

    // setting local storage
    if (localStorage.getItem("cart") == null) {
      localStorage.setItem("cart", JSON.stringify([]));
    }

    let cart = JSON.parse(localStorage.getItem("cart"));
    let tour = cart.find((t) => t.id == id);

    // adding the tour to local storage
    if (tour === undefined) {
      cart.push({
        id: id,
        img: image,
        name: name,
        count: 1,
      });
    } else {
      tour.count += 1;
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    getTourCount();
  });
});

// getting tour count
function getTourCount() {
  let arrCart = JSON.parse(localStorage.getItem("cart"));
  document.querySelector(".tour-count").innerText = arrCart.length;
}

getTourCount();


// showing alert when cart is empty
function showAlert() {
  // taking the elements   
  let tourCount = document.querySelector(".tour-count");
  let emptyAlert = document.querySelector(".empty-alert");
  let table = document.querySelector(".shop-table");
  let cartTotals = document.querySelector(".cart-totals");

  if (tourCount.innerText == 0) {
    emptyAlert.classList.remove("d-none");
    table.classList.add("d-none");
    cartTotals.classList.add("d-none");
  } else {
    emptyAlert.classList.add("d-none");
    table.classList.remove("d-none");
    cartTotals.classList.remove("d-none");
  }
}

showAlert();


// taking cart
let arrCart = JSON.parse(localStorage.getItem("cart"));
// taking tourContainer
let tourContainer = document.querySelector(".tourContainer-inCart");

// adding a tour to the cart
arrCart.forEach((tour) => {
  tourContainer.innerHTML += 
        `<tr class="tbody-row">
            <!-- tour-img -->
            <td>
                <div class="tour-smallImg">
                    <img class="img-fluid" src="${tour.img}" alt="gabala">
                </div>
            </td>
            <!-- tour-name -->
            <td class="tour-name">${tour.name}</td>
            <!-- tour-price -->
            <td class="tour-price">
                <div class="price-wrapper">
                    <i class="flaticon-dollar"></i>
                    <span>0</span>
                </div>
            </td>
            <!-- increase or decrease the quantity -->
            <td class="increase-decrease">
                <div class="increase-decrease-area">
                    <button type="button" class="btn minus-btn"><i class="fas fa-minus"></i></button>
                    <input type="text" class="amount" value="${tour.count}" readonly>
                    <button type="button" class="btn plus-btn"><i class="fas fa-plus"></i></button>
                </div>
            </td>
            <!-- total-price -->
            <td class="total-price tour-total-price">
                <div class="price-wrapper">
                    <i class="flaticon-dollar"></i>
                    <span class="price">0</span>
                </div>
            </td>
            <!-- remove-btn -->
            <td class="remove-tour">
                <a href="#"><i class="fas fa-times"></i></a>
            </td>
        </tr>`;
});
// =======  Cart - End  ======= //