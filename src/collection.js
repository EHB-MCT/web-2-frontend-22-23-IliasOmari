const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '533a598ecbmsh0e7684e4f0d8f14p186d29jsn4993a4cb8b25',
        'X-RapidAPI-Host': 'binance-nft.p.rapidapi.com'
    }
};

fetchData()

function fetchData() {

    fetch('https://binance-nft.p.rapidapi.com/top-collections/?day=0', options)
        .then(response => response.json())
        .then(data => {
            console.log(data.data.list)
            data.data.list.forEach(el => {
                const title = el.title
                const image = el.coverUrl
                const price = el.floorPrice
                const rank = el.rank
                renderCollections(title, price, rank, image)
            })
        })
}



function renderCollections(title, price, rank, image) {
    const htmlString = document.getElementById('cards')
    let html = ''

    html += ` <div class="card-collection">
        <div class="card-collection-img">
            <img src="${image}" alt="test">
        </div>

        <div class="card-collection-title">
            <h2>${title}</h2>
        </div>
        <div class="card-collection-price">
            <h3>${price} BUSD</h3>
        </div>
        <div class="card-collection-rank_like">
            <p>#${rank}</p>
            <img src="./icons/love.png" alt="like">
        </div>

    </div>`

    htmlString.innerHTML += html
}


const renderAll = document.getElementById('All')
renderAll.addEventListener('click', (e) => {
    renderCollections()
})
const renderThree = document.getElementById('top3')
renderThree.addEventListener('click', (e) => {
    console.log('clicked for top 3')
})

const renderTen = document.getElementById('top10')
renderTen.addEventListener('click', (e) => {
    console.log('clicked for top 10')
})

const renderTwenty = document.getElementById('top20')
renderTen.addEventListener('click', (e) => {
    console.log('clicked for top 20')
})