import Swal from 'sweetalert2'

let collection = [];
let sortedCollection = [];
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '12f64dfb11msh59b48c715183f7dp1926fdjsn4bd22c0cdd56',
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
            data.data.list.forEach(el => {
                const title = el.title
                let img
                if (el.coverUrl) {
                    img = el.coverUrl
                } else {
                    img = `./img/no_picture.png`
                }
                const price = el.floorPrice
                const rank = el.rank
                const id = el.collectionId
                let nft = {
                    id: id,
                    title: title,
                    image: img,
                    price: price,
                    rank: rank
                }
                collection.push(nft)
                sortedCollection.push(nft)
            })
            renderCollections()
            changeLike()
        })
}


function changeLike() {
    const user = JSON.parse(sessionStorage.getItem('user'))

    if (user) {
        fetch(`https://nft-universe.onrender.com/like/${user.uuid}`)

            .then(res => res.json())
            .then(data => {
                data.data.forEach(el => {
                    let collectionId = el.collectionId
                    const like = document.getElementsByName('like')
                    like.forEach(btn => {
                        if (btn.getAttribute('id') == collectionId) {
                            btn.parentElement.innerHTML = `<img src="./img/like_red.png">`
                        }
                    })

                })
            })

    }
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
            <div>
           <img id = ${el.id} name = 'like' src="./icons/love.png" alt="like"></a> 
           </div>

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

                fetch('https://nft-universe.onrender.com/like', {
                        method: "POST",
                        headers: {
                            'Content-Type': "application/json"
                        },
                        body: JSON.stringify(likedCollection)
                    })
                    .then(res => res.json())
                    .then(data => {
                        const Toast = Swal.mixin({
                            toast: true,
                            position: 'top-right',
                            iconColor: 'white',
                            customClass: {
                                popup: 'colored-toast'
                            },
                            showConfirmButton: false,
                            timer: 2500,
                            timerProgressBar: true

                        })

                        Toast.fire({
                            icon: 'info',
                            title: data.message,
                        })
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
    el.addEventListener('click', e => {})
})