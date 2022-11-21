const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'cbb863c29amsh9b878cf8b13e2a1p1e439cjsnd7096005b269',
        'X-RapidAPI-Host': 'binance-nft.p.rapidapi.com'
    }
};

fetchData()

function fetchData() {


    fetch('https://binance-nft.p.rapidapi.com/top-creators/?day=0', options)
        .then(response => response.json())
        .then(data => {
            console.log(data.data.list)
            data.data.list.forEach(el => {
                const name = el.nickName
                const image = el.avatarUrl
                const sales = el.salesCount
                const rank = el.rank
                const items = el.itemsCount
                const fans = el.fansCount

                renderCreators(name, image, sales, rank, items, fans)
            })
        })
}

function renderCreators(name, image, sales, rank, items, fans) {
    const htmlString = document.getElementById('creators')
    let html = ''

    html += `  
 <div class="card-creator">

            <div class="card-creator-img">
                <img src="${image}" alt="creator-img">
                <h2>${name}</h2>

                <div class="card-creator-like">
                    <img src="./icons/love.png" alt="like">
                </div>
            </div>

    <div class="card-creator-info">

        <div class="info-1">
            <h4>Rank</h4>
            <p>${rank}</p>
        </div>


        <div class="info-2">
            <h4>Sales</h4>
            <p>${sales}</p>
        </div>

        <div class="info-3">
            <h4>Items</h4>
            <p>${items}</p>
        </div>

        <div class="info-4">
            <h4>Fans</h4>
            <p>${fans}</p>
        </div>

    </div>

</div>`

    htmlString.innerHTML += html
}