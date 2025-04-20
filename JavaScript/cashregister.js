const itemsList = {
    banana: 1.25,
    handkerchief: 0.99,
    Tshirt: 25.01,
    apple: 0.60,
    nalgene: 10.34,
    proteinShake: 22.36
};

function cashRegister(cart) {
    let totalPrice = 0;

    for (let item in cart) {
        if (itemsList[item]) {
            totalPrice += itemsList[item] * cart[item]; 
        }
    }

    return totalPrice;
}

function createCart() {
    let cart = {};
    let addItem = true;

    while (addItem) {
        let itemName = prompt("Enter the item name (e.g., banana, Tshirt, apple). Type 'done' to finish:");
        if (itemName.toLowerCase() === "done") {
            addItem = false;
        } else if (itemsList[itemName.toLowerCase()] !== undefined) {
            let quantity = prompt(`How many ${itemName} do you want?`);
            cart[itemName.toLowerCase()] = parseInt(quantity); 
        } else {
            console.log("Item not found. Please choose from the available list.");
        }
    }

    let total = cashRegister(cart);
    console.log(`Your total is: $${total.toFixed(2)}`);
}

createCart();
