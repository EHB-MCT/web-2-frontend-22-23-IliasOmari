 let likedItems = [];
 const user = JSON.parse(sessionStorage.getItem('user'))

 if (user) {
     likedItems = []
     fetch(`http://localhost:1200/like/${user.uuid}`)

         .then(res => res.json())
         .then(data => {
             data.data.forEach(el => {
                 const title = el.title
                 const image = el.img
                 const price = el.price
                 const rank = el.rank
                 const id = el.collectionId

                 let nft = {
                     id: id,
                     title: title,
                     image: image,
                     price: price,
                     rank: rank
                 }
                 likedItems.push(nft)
             })
             console.log(likedItems)
             renderLikedItems()
         })
 }

 function renderLikedItems() {


     if (likedItems.length == 0) {
         const message = document.getElementById("nolike-message")

         message.style.display = 'block'
     } else {
         const message = document.getElementById("nolike-message")

         message.style.display = 'none'
     }
     const htmlString = document.getElementById('card-collection')
     let html = ''
     likedItems.forEach(el => {
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
            <img id = ${el.id} name = 'delete' src="./img/delete (1).png" alt="trash"></a> 
            </div>
        </div>`

     })
     htmlString.innerHTML += html


     const deleteLikes = document.getElementsByName('delete')
     deleteLikes.forEach(el => {
         el.addEventListener('click', (e) => {
             e.preventDefault()
             const id = e.target.id
             getData(`http://localhost:1200/deleteLike?collectionId=${id}&userId=${user.uuid}`, "DELETE")
                 .then(result => {
                     console.log(result)
                     location.reload()
                 })
         })
     })
 }

 async function getData(url, method, data) {
     let resp = await fetch(url, {
         method: method,
         headers: {
             'Content-Type': "application/json"
         },
         body: JSON.stringify(data)
     });
     return await resp.json();
 }