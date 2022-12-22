import Swal from 'sweetalert2'
let create = [];
let copyCreate = [];
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b97d1020d2msh434627b82e6f637p1e1b9djsnee3cc160836c',
        'X-RapidAPI-Host': 'binance-nft.p.rapidapi.com'
    }
};

fetchData()

function fetchData() {
    fetch('https://binance-nft.p.rapidapi.com/top-creators/?day=0', options)
        .then(response => response.json())
        .then(data => {
            create = []
            console.log(data.data.list)
            data.data.list.forEach(el => {
                const name = el.nickName
                const image = el.avatarUrl
                const sales = el.salesCount
                const rank = el.rank
                const items = el.itemsCount
                const fans = el.fansCount
                const id = el.creatorId

                let crt = {
                    id: id,
                    name: name,
                    image: image,
                    sales: sales,
                    rank: rank,
                    items: items,
                    fans: fans
                }
                create.push(crt)
            })
            copyCreate = create
            renderCreators()
            changeLike()
        })
}





function fetchByDate(value) {
    fetch(`https://binance-nft.p.rapidapi.com/top-creators/?day=${value}`, options)
        .then(response => response.json())
        .then(data => {
            create = []
            console.log(data)
            data.data.list.forEach(el => {
                const name = el.nickName
                const image = el.avatarUrl
                const sales = el.salesCount
                const rank = el.rank
                const items = el.itemsCount
                const fans = el.fansCount
                const id = el.creatorId

                let crt = {
                    id: id,
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
                       <img id=${el.id} name = 'like' src="./icons/love.png" alt="like">
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
    likedCreator()
}



function likedCreator() {
    const like = document.getElementsByName('like')
    like.forEach(el => {
        el.addEventListener('click', e => {
            if (sessionStorage.getItem('user')) {
                let id = e.target.id
                const filter = create.filter(el => el.id == id)
                const user = JSON.parse(sessionStorage.getItem('user'))

                let likedCrt = {
                    collectionId: id,
                    userId: user.uuid,
                    title: filter[0].name,
                    img: filter[0].image,
                    rank: filter[0].rank
                }

                fetch('http://localhost:1200/like', {
                        method: "POST",
                        headers: {
                            'Content-Type': "application/json"
                        },
                        body: JSON.stringify(likedCrt)
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

function changeLike() {
    const user = JSON.parse(sessionStorage.getItem('user'))

    if (user) {
        fetch(`http://localhost:1200/like/${user.uuid}`)

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



//buttons 
const renderAll = document.getElementById('All')
renderAll.addEventListener('click', (e) => {
    fetchData()
})

const button = document.getElementsByName('filter')
button.forEach(btn => {
    btn.addEventListener('click', e => {
        let value = e.target.id
        fetchByDate(value)
    })
})

let buttons = document.getElementsByName('filter')

buttons.forEach(button => {
    button.addEventListener('click', function () {
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active')
    })

})