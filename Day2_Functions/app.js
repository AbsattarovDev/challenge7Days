let billAmount = parseFloat(prompt("Enter the bill amount:"));
let tipPercent = parseInt(prompt("Rate our service (10 - Average, 15 - Good, 20 - Excellent):"), 10);
let numPeople = parseInt(prompt("Enter the number of people:"), 10);

function calculateTip(totalAmount, tipPercent, people) {
    let tipAmount = (totalAmount * tipPercent) / 100;
    let total = totalAmount + tipAmount;
    let perPerson = total / people;

    console.log(`Tip amount: $${tipAmount.toFixed(2)}`);
    console.log(`Total amount: $${total.toFixed(2)}`);
    console.log(`Amount per person: $${perPerson.toFixed(2)}`);
}

if (isNaN(billAmount) || billAmount <= 0) {
    console.log("Please enter a valid bill amount!");
} else if (tipPercent !== 10 && tipPercent !== 15 && tipPercent !== 20) {
    console.log("Please enter a valid tip percentage (10, 15, or 20)!");
} else if (isNaN(numPeople) || numPeople <= 0) {
    console.log("Please enter a valid number of people!");
} else {
    calculateTip(billAmount, tipPercent, numPeople);
}
