import Swal from 'sweetalert2'
let NFT = [];
let copyNft = [];


const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b97d1020d2msh434627b82e6f637p1e1b9djsnee3cc160836c',
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
                let image
                if (el.coverUrl) {
                    image = el.coverUrl
                } else {
                    image = `./img/no_picture.png`
                }
                const price = parseInt(el.price)
                const id = el.nftId
                const rank = el.rank

                let nft = {
                    id: id,
                    title: title,
                    image: image,
                    price: price,
                    rank: rank,
                }
                NFT.push(nft)
            })
            copyNft = NFT
            renderNFT()
            changeLike()
        })

}



function renderNFT() {
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
        el.addEventListener('click', e => {
            if (sessionStorage.getItem('user')) {
                let id = e.target.id
                const filter = NFT.filter(el => el.id == id)
                const user = JSON.parse(sessionStorage.getItem('user'))
                let likedNft = {
                    collectionId: id,
                    userId: user.uuid,
                    title: filter[0].title,
                    img: filter[0].image,
                    rank: filter[0].rank,
                    price: filter[0].price,
                }

                fetch('https://nft-universe.onrender.com/like', {
                        method: "POST",
                        headers: {
                            'Content-Type': "application/json"
                        },

                        body: JSON.stringify(likedNft)
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






// sort Buttons
const renderAll = document.getElementById('All')
renderAll.addEventListener('click', (e) => {
    fetchData()
})

const sortExpensive = document.getElementById('sortExpensive')
sortExpensive.addEventListener('click', (e) => {
    sortExp()
})

const sortCheap = document.getElementById('sortCheap')
sortCheap.addEventListener('click', (e) => {
    sortChp()
})


// sort functions
function sortExp() {
    NFT.sort((a, b) => {
        if (a.price < b.price) {
            return 1
        } else {
            return -1
        }
    })
    renderNFT()
}

function sortChp() {
    NFT.sort((a, b) => {
        if (a.price < b.price) {
            return -1
        } else {
            return 1
        }
    })
    renderNFT()
}

let buttons = document.getElementsByName('filter')

buttons.forEach(button => {
    button.addEventListener('click', function () {
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active')
    })
})