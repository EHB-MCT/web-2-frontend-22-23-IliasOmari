"use strict"
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '78cd515f38msh0b9626d040e5cc3p137289jsn92ebfe031371',
        'X-RapidAPI-Host': 'binance-nft.p.rapidapi.com'
    }
};

fetch('https://binance-nft.p.rapidapi.com/top-collections/?day=0', options)
    .then(response => response.json())
    .then(response => console.log(response.data.forEach(element => {

    })))