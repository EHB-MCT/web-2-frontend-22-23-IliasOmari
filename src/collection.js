let collection = [];
let sortedCollection = [];
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'da69d0b0e9mshf63f749c6d62bd4p108f52jsnfef20042e335',
        'X-RapidAPI-Host': 'binance-nft.p.rapidapi.com'
    }
};


fetchData()

function fetchData() {

    fetch('https://binance-nft.p.rapidapi.com/top-collections/?day=0', options)
        .then(response => response.json())
        .then(data => {
            collection = []
            sortedCollection = []
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
                sortedCollection.push(nft)
            })
            renderCollections()


        })
}



function renderCollections() {
    const htmlString = document.getElementById('cards')
    const sort = sortedCollection.sort((a, b) => {
        if (a.title > b.title) {
            return 1
        } else {

            return -1
        }
    })
    console.log(sort)
    let html = ''

    sort.forEach(el => {
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
    })

    htmlString.innerHTML += html
}


let buttons = document.getElementsByName('filter')

buttons.forEach(button => {
    button.addEventListener('click', function () {
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active')
    })
})



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