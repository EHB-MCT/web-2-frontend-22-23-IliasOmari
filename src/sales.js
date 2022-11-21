const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'cbb863c29amsh9b878cf8b13e2a1p1e439cjsnd7096005b269',
        'X-RapidAPI-Host': 'binance-nft.p.rapidapi.com'
    }
};



fetch('https://binance-nft.p.rapidapi.com/top-sales/?day=0', options)
    .then(response => response.json())
    .then(data => {
        console.log(data.data.list)
        data.data.list.forEach(el => {
            const title = el.title
            const image = el.coverUrl
            const price = el.price

            renderSales(title, price, image)
        })
    })


function renderSales(title, price, image) {
    const htmlString = document.getElementById('sales')
    let html = ''

    html += `
    <div class="card-sales">

        <div class="info-sales">
            <img src="${image}" alt="Moonbird">
            <h2>${title}</h2>
        </div>
        <div class="info-sales-price_like">
            <p>${price}$ </p>
            <img src="./icons/love.png" alt="like">
        </div>
</div>`

    htmlString.innerHTML += html
}