let create = [];
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'da69d0b0e9mshf63f749c6d62bd4p108f52jsnfef20042e335',
        'X-RapidAPI-Host': 'binance-nft.p.rapidapi.com'
    }
};

fetchData()

function fetchData() {
    fetch('https://binance-nft.p.rapidapi.com/top-creators/?day=0', options)
        .then(response => response.json())
        .then(data => {
            create = []
            data.data.list.forEach(el => {
                const name = el.nickName
                const image = el.avatarUrl
                const sales = el.salesCount
                const rank = el.rank
                const items = el.itemsCount
                const fans = el.fansCount

                let crt = {
                    name: name,
                    image: image,
                    sales: sales,
                    rank: rank,
                    items: items,
                    fans: fans
                }
                create.push(crt)
            })
            renderCreators()
        })
}


const button = document.getElementsByName('filter')
button.forEach(btn => {
    btn.addEventListener('click', e => {
        let value = e.target.id
        fetchByDate(value)
        console.log('click')
    })
})


function fetchByDate(value) {
    fetch(`https://binance-nft.p.rapidapi.com/top-creators/?day=${value}`, options)
        .then(response => response.json())
        .then(data => {
            create = []
            data.data.list.forEach(el => {
                const name = el.nickName
                const image = el.avatarUrl
                const sales = el.salesCount
                const rank = el.rank
                const items = el.itemsCount
                const fans = el.fansCount

                let crt = {
                    name: name,
                    image: image,
                    sales: sales,
                    rank: rank,
                    items: items,
                    fans: fans
                }
                create.push(crt)
            })
            renderCreators()
        })
}



function renderCreators() {
    const htmlString = document.getElementById('creators')
    htmlString.innerHTML = ''
    let html = ''
    create.forEach(el => {
        html += `  
        <div class="card-creator">
       
                   <div class="card-creator-img">
                       <img src="${el.image}" alt="creator-img">
                       <h2>${el.name}</h2>
       
                       <div class="card-creator-like">
                           <img src="./icons/love.png" alt="like">
                       </div>
                   </div>
       
           <div class="card-creator-info">
       
               <div class="info-1">
                   <h4>Rank</h4>
                   <p>${el.rank}</p>
               </div>
       
       
               <div class="info-2">
                   <h4>Sales</h4>
                   <p>${el.sales}</p>
               </div>
       
               <div class="info-3">
                   <h4>Items</h4>
                   <p>${el.items}</p>
               </div>
       
               <div class="info-4">
                   <h4>Fans</h4>
                   <p>${el.fans}</p>
               </div>
       
           </div>
       
       </div>`

    })

    htmlString.innerHTML += html
}



const renderAll = document.getElementById('All')
renderAll.addEventListener('click', (e) => {
    console.log('list of all creators')
    fetchData()
})


let buttons = document.getElementsByName('filter')

buttons.forEach(button => {
    button.addEventListener('click', function () {
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active')
    })

})