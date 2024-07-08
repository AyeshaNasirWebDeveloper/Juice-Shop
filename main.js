function juiceShop(productName) {
    let price;
    let quantity;

    switch (productName) {
        case "Orange":
            price = 350;
            quantity = 7;
            break;
        case "Banana":
            price = 300;
            quantity = 3;
            break;
        case "Apple":
            price = 300;
            quantity = 5;
            break;
        case "Mango":
            price = 450;
            quantity = 5;
            break;
        case "Strawberry":
            price = 350;
            quantity = 9;
            break;
        case "Pine Apple":
            price = 300;
            quantity = 6;
            break;
        case "Grapes":
            price = 250;
            quantity = 3;
            break;
        case "Kiwi":
            price = 250;
            quantity = 4;
            break;
        case "Cherry":
            price = 350;
            quantity = 2;
            break;
        case "Papaya":
            price = 350;
            quantity = 1;
            break;
        case "Cocktail":
            price = 450;
            quantity = 5;
            break;
        default:
            console.log("Oops! Sorry Not Available");
    }

    var userOutput = `It is a great pleasure to serve you! Your Price is Rs. ${price} and Quantity is ${quantity}`;
    return userOutput;
}

const userInput = prompt("What's your order?");
const formattedInput = userInput.trim();
const output = juiceShop(formattedInput);
console.log(output);
