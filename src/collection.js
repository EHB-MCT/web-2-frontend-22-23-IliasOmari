let collection = [];
let sortedCollection = [];
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '704a6c2a6dmsh417c72c7ccdde15p101110jsn4f3606cfc7e9',
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
                const id = el.collectionId
                let nft = {
                    id: id,
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

    let html = ''

    sort.forEach(el => {
        html += `
        <div class="card-collection">
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
           <img id = ${el.id} name = 'like' src="./icons/love.png" alt="like"></a> 
        </div>
    </div>


    </div>`
    })
    htmlString.innerHTML += html
    likedCollection()

}


function likedCollection() {
    const like = document.getElementsByName('like')
    like.forEach(el => {
        el.addEventListener('click', e => {
            if (sessionStorage.getItem('user')) {
                let id = e.target.id
                const filter = collection.filter(el => el.id == id)
                const user = JSON.parse(sessionStorage.getItem('user'))

                let likedCollection = {
                    collectionId: id,
                    userId: user.uuid,
                    title: filter[0].title,
                    img: filter[0].image,
                    rank: filter[0].rank,
                    price: filter[0].price
                }

                fetch('http://localhost:1200/like', {
                        method: "POST",
                        headers: {
                            'Content-Type': "application/json"
                        },
                        body: JSON.stringify(likedCollection)
                    })
                    .then(res => res.json())
                    .then(data => {
                        alert(data.message)
                    })
            } else {
                window.location.href = "login.html"
            }

        })
    })
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
                 <img id = ${el.id} name = 'like' src="./icons/love.png" alt="like"></a>
            </div>
    
        </div>`
        htmlString.innerHTML += html
        likedCollection()
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
                <img id = ${el.id} name = 'like' src="./icons/love.png" alt="like"></a>
                </div>
    
        </div>`

        htmlString.innerHTML += html
        likedCollection()
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
                <img id = ${el.id} name = 'like' src="./icons/love.png" alt="like"></a>
                </div>
    
        </div>`

        htmlString.innerHTML += html
        likedCollection()
    })
})


const like = document.getElementsByName('like')
like.forEach(el => {
    console.log(el)
    el.addEventListener('click', e => {
        console.log("liked")
    })
})