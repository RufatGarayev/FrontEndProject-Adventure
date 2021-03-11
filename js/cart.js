// =======  Cart - Start  ======= //
// taking "addToCart" btn
let addToCart = document.querySelectorAll(".addToCartBtn");

addToCart.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    getTourCount();
  });
});



// getting tour count
function getTourCount() {
    let cart = JSON.parse(localStorage.getItem("__cart"));
    document.querySelector(".tour-count").innerText = cart.length;
}
  
getTourCount();



// showing alert when cart is empty
function showAlert() {
  // taking the elements
  let emptyAlert = document.querySelector(".empty-alert");
  let table = document.querySelector(".shop-table");
  let cartTotals = document.querySelector(".cart-totals");
  let cart = JSON.parse(localStorage.getItem("__cart"));

  if (cart.length > 0) {
    emptyAlert.classList.add("d-none");
    table.classList.remove("d-none");
    cartTotals.classList.remove("d-none");
  } else {
    emptyAlert.classList.remove("d-none");
    table.classList.add("d-none");
    cartTotals.classList.add("d-none");
  }
}

showAlert();


function renderCart(tours) {
    // taking the elements
    let $cart = document.querySelector(".tourContainer-inCart");
    let $total = document.querySelector(".cart-total-price");
    
    // adding a tour to the cart
    $cart.innerHTML = tours.map((tour) =>     
        `<tr class="tbody-row">
            <!-- tour-name -->
            <td class="tour-name">${tour.name}</td>
            <!-- tour-price -->
            <td class="tour-price">
                <div class="price-wrapper">
                    <span>$${tour.price}</span>
                </div>
            </td>
            <!-- increase or decrease the quantity -->
            <td class="increase-decrease">
                <div class="increase-decrease-area">
                    <button type="button" class="btn minus-btn" onClick="cartLS.quantity(${tour.id},-1)"><i class="fas fa-minus"></i></button>
                    <input type="text" class="amount" value="${tour.quantity}" readonly>
                    <button type="button" class="btn plus-btn" onClick="cartLS.quantity(${tour.id},1)"><i class="fas fa-plus"></i></button>
                </div>
            </td>
            <!-- remove-btn -->
            <td class="remove-tour">
                <a class="btn btn-danger" href="javascript:void(0)" onClick="cartLS.remove(${tour.id})">Remove</a>
            </td>
        </tr>`).join("");


    getTourCount();
    showAlert();
    $total.innerHTML = "$" + cartLS.total();
}

renderCart(cartLS.list());
cartLS.onChange(renderCart);
// =======  Cart - End  ======= //