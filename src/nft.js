let NFT = [];
let copyNft = [];


const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '12f64dfb11msh59b48c715183f7dp1926fdjsn4bd22c0cdd56',
        'X-RapidAPI-Host': 'binance-nft.p.rapidapi.com'
    }
};


fetchData()

function fetchData() {


    fetch('https://binance-nft.p.rapidapi.com/top-sales/?day=0', options)
        .then(response => response.json())
        .then(data => {
            NFT = []
            console.log(data.data.list)
            data.data.list.forEach(el => {
                const title = el.title
                const image = el.coverUrl
                const price = parseInt(el.price)
                const id = el.nftId

                let nft = {
                    id: id,
                    title: title,
                    image: image,
                    price: price
                }
                NFT.push(nft)
            })
            copyNft = NFT
            renderSales()
        })

}




function renderSales() {
    const htmlString = document.getElementById('sales')
    htmlString.innerHTML = ''
    let html = ''
    NFT.forEach(el => {
        html += `
    <div class="card-sales">

        <div class="info-sales">
            <img src="${el.image}" alt="Moonbird">
            <h2>${el.title}</h2>
        </div>
        <div class="info-sales-price_like">
            <p>${el.price}$ </p>
            <img id=${el.id} name = 'like' src="./icons/love.png" alt="like">
        </div>
</div>`
    })

    htmlString.innerHTML += html
    likedNft()
}

function likedNft() {
    const like = document.getElementsByName('like')
    like.forEach(el => {
        console.log(el)
        el.addEventListener('click', e => {
            if (sessionStorage.getItem('user')) {
                console.log('like')
                let id = e.target.id
                const filter = NFT.filter(el => el.id == id)
                console.log(filter[0])
                const user = JSON.parse(sessionStorage.getItem('user'))
                let likedNft = {
                    nftId: id,
                    userId: user.uuid,
                    title: filter[0].title,
                    img: filter[0].image,
                    rank: filter[0].rank,
                }

                fetch('http://localhost:1200/like', {
                        method: "POST",
                        headers: {
                            'Content-Type': "application/json"
                        },
                        body: JSON.stringify(likedNft)
                    })
                    .then(res => res.json())
                    .then(data => alert(data.message))
            } else {
                alert('You need to be connected to like.')
            }

        })
    })
}










const renderAll = document.getElementById('All')
renderAll.addEventListener('click', (e) => {
    fetchData()
})

const sortExpensive = document.getElementById('sortExpensive')
sortExpensive.addEventListener('click', (e) => {
    console.log('click')
    sortExp()
})

const sortCheap = document.getElementById('sortCheap')
sortCheap.addEventListener('click', (e) => {
    console.log('click')
    sortChp()
})



function sortExp() {
    NFT.sort((a, b) => {
        if (a.price < b.price) {
            return 1
        } else {
            return -1
        }
    })
    renderSales()
}

function sortChp() {
    NFT.sort((a, b) => {
        if (a.price < b.price) {
            return -1
        } else {
            return 1
        }
    })
    renderSales()
}

let buttons = document.getElementsByName('filter')

buttons.forEach(button => {
    button.addEventListener('click', function () {
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active')
    })
})