// Object containing items and their prices in USD
const itemsInUSD = {
    "Laptop": 1000,
    "Smartphone": 700,
    "Headphones": 150,
    "Keyboard": 100,
    "Monitor": 300
};

// Exchange rate from USD to INR
const exchangeRate = 80;

// Function to convert prices from USD to INR
const convertPricesToINR = (pricesInUSD) => {
    // Convert the object to an array of key-value pairs, map to convert prices, and convert back to an object
    const pricesInINR = Object.entries(pricesInUSD).map(([item, priceInUSD]) => {
        return [item, priceInUSD * exchangeRate];
    });

    // Convert the array of key-value pairs back into an object
    return Object.fromEntries(pricesInINR);
};

// Create the new object with prices in INR
const itemsInINR = convertPricesToINR(itemsInUSD);

// Output the converted prices
console.log(itemsInINR);
