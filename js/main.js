// capturing elements by there id.
const bestPrice = document.getElementById('best-price');
const memoryCost = document.getElementById('memory-cost');
const storageCost = document.getElementById('storage-cost');
const deliveryCost = document.getElementById('delivery-cost');
const totalPrice = document.getElementById('total-price');
const grandTotal = document.getElementById('grand-total');
const inputField = document.getElementById("code-field");

// updating memory price
function updateMemoryPrice(amount) {
    memoryCost.innerText = amount;
    getTotal()
    updateGrandTotal()
}

// updating storage price
function updateStoragePrice(price) {
    storageCost.innerText = price;
    getTotal()
    updateGrandTotal()
}

// updating delivery price
function updateDeliveryCost(cost) {
    deliveryCost.innerText = cost;
    getTotal()
    updateGrandTotal()
}

// adding all amounts
function addAmounts() {
    const total = Number(bestPrice.innerText) + Number(memoryCost.innerText) +
        Number(storageCost.innerText) + Number(deliveryCost.innerText);
    return total;
}

// updating total amount
function getTotal() {
    totalPrice.innerText = addAmounts();
}

// updating grand total amount
function updateGrandTotal() {
    grandTotal.innerText = addAmounts();
}

// updating grand total after using promo code 
document.getElementById("promo-btn").addEventListener("click", function () {
    const promoCode = "stevekaku"; // promo code
    const discount = (totalPrice.innerText * 20) / 100; // getting discount
    // applying condition to verify the promo code
    if (inputField.value.toLowerCase() == promoCode.toLowerCase()) {
        grandTotal.innerText = totalPrice.innerText - discount;
    }
    // clear input field
    inputField.value = '';
})
