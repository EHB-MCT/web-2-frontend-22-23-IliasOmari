let NFT = [];
let copyNft = [];


const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '533a598ecbmsh0e7684e4f0d8f14p186d29jsn4993a4cb8b25',
        'X-RapidAPI-Host': 'binance-nft.p.rapidapi.com'
    }
};


fetchData()

function fetchData() {


    fetch('https://binance-nft.p.rapidapi.com/top-sales/?day=0', options)
        .then(response => response.json())
        .then(data => {
            NFT = []
            data.data.list.forEach(el => {
                const title = el.title
                const image = el.coverUrl
                const price = parseInt(el.price)

                let nft = {
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
            <img src="./icons/love.png" alt="like">
        </div>
</div>`
    })


    htmlString.innerHTML += html
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