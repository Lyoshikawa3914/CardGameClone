import Card from "./Card.js";
const dragonCourage = 'https://digimoncard.io/api-public/search.php?pack=ST-15'
const purpleWolf = 'https://digimoncard.io/api-public/search.php?pack=ST-16'

async function getData() {
    const response = await fetch(dragonCourage)
    const data = await response.json()
    return data;  
}


const dragonDeck = await getData();
console.log(dragonDeck);
