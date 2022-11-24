let collection = [];

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
                let nft = {
                    title: title,
                    image: image,
                    price: price,
                    rank: rank
                }
                collection.push(nft)
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
    const htmlString = document.getElementById('cards')
    htmlString.innerHTML = ""
    fetchData()
})




const renderThree = document.getElementById('top3')
renderThree.addEventListener('click', (e) => {

    const htmlString = document.getElementById('cards')
    htmlString.innerHTML = ""


    const slice = collection.slice(0, 3)
    slice.forEach(el => {
        const htmlString = document.getElementById('cards')
        let html = ''

        html += ` <div class="card-collection">
            <div class="card-collection-img">
                <img src="${el.image}" alt="test">
            </div>
    
            <div class="card-collection-title">
                <h2>${el.title}</h2>
            </div>
            <div class="card-collection-price">
                <h3>${el.price} BUSD</h3>
            </div>
            <div class="card-collection-rank_like">
                <p>#${el.rank}</p>
                <img src="./icons/love.png" alt="like">
            </div>
    
        </div>`

        htmlString.innerHTML += html
    })
})

const renderTen = document.getElementById('top10')
renderTen.addEventListener('click', (e) => {
    const htmlString = document.getElementById('cards')
    htmlString.innerHTML = ""


    const slice = collection.slice(0, 10)
    slice.forEach(el => {
        const htmlString = document.getElementById('cards')
        let html = ''

        html += ` <div class="card-collection">
            <div class="card-collection-img">
                <img src="${el.image}" alt="test">
            </div>
    
            <div class="card-collection-title">
                <h2>${el.title}</h2>
            </div>
            <div class="card-collection-price">
                <h3>${el.price} BUSD</h3>
            </div>
            <div class="card-collection-rank_like">
                <p>#${el.rank}</p>
                <img src="./icons/love.png" alt="like">
            </div>
    
        </div>`

        htmlString.innerHTML += html
    })
})

const renderTwenty = document.getElementById('top20')
renderTwenty.addEventListener('click', (e) => {
    const htmlString = document.getElementById('cards')
    htmlString.innerHTML = ""


    const slice = collection.slice(0, 20)
    slice.forEach(el => {
        const htmlString = document.getElementById('cards')
        let html = ''

        html += ` <div class="card-collection">
            <div class="card-collection-img">
                <img src="${el.image}" alt="test">
            </div>
    
            <div class="card-collection-title">
                <h2>${el.title}</h2>
            </div>
            <div class="card-collection-price">
                <h3>${el.price} BUSD</h3>
            </div>
            <div class="card-collection-rank_like">
                <p>#${el.rank}</p>
                <img src="./icons/love.png" alt="like">
            </div>
    
        </div>`

        htmlString.innerHTML += html
    })
})