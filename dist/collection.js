(()=>{let e=[],n=[];const i={method:"GET",headers:{"X-RapidAPI-Key":"704a6c2a6dmsh417c72c7ccdde15p101110jsn4f3606cfc7e9","X-RapidAPI-Host":"binance-nft.p.rapidapi.com"}};function c(){fetch("https://binance-nft.p.rapidapi.com/top-collections/?day=0",i).then((e=>e.json())).then((i=>{e=[],n=[],console.log(i.data.list),i.data.list.forEach((i=>{const c=i.title,t=i.coverUrl,l=i.floorPrice,d=i.rank;let a={id:i.collectionId,title:c,image:t,price:l,rank:d};e.push(a),n.push(a)})),function(){const e=document.getElementById("cards"),i=n.sort(((e,n)=>e.title>n.title?1:-1));let c="";i.forEach((e=>{c+=`\n        <div class="card-collection">\n        <div class="card-collection-img">\n            <img src="${e.image}" alt="test">\n        </div>\n\n        <div class="card-collection-title">\n            <h2>${e.title}</h2>\n        </div>\n        <div class="card-collection-price">\n            <h3>${e.price} BUSD</h3>\n        </div>\n        <div class="card-collection-rank_like">\n            <p>#${e.rank}</p>\n           <img id = ${e.id} name = 'like' src="./icons/love.png" alt="like"></a> \n        </div>\n    </div>\n\n\n    </div>`})),e.innerHTML+=c,t()}()}))}function t(){document.getElementsByName("like").forEach((n=>{n.addEventListener("click",(n=>{if(sessionStorage.getItem("user")){let i=n.target.id;const c=e.filter((e=>e.id==i)),t=JSON.parse(sessionStorage.getItem("user"));let l={collectionId:i,userId:t.uuid,title:c[0].title,img:c[0].image,rank:c[0].rank,price:c[0].price};fetch("http://localhost:1200/like",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}).then((e=>e.json())).then((e=>{alert(e.message)}))}else window.location.href="login.html"}))}))}c();let l=document.getElementsByName("filter");l.forEach((e=>{e.addEventListener("click",(function(){l.forEach((e=>e.classList.remove("active"))),this.classList.add("active")}))})),document.getElementById("All").addEventListener("click",(e=>{document.getElementById("cards").innerHTML="",c()})),document.getElementById("top3").addEventListener("click",(n=>{document.getElementById("cards").innerHTML="",e.slice(0,3).forEach((e=>{const n=document.getElementById("cards");let i="";i+=` <div class="card-collection">\n            <div class="card-collection-img">\n                <img src="${e.image}" alt="test">\n            </div>\n    \n            <div class="card-collection-title">\n                <h2>${e.title}</h2>\n            </div>\n            <div class="card-collection-price">\n                <h3>${e.price} BUSD</h3>\n            </div>\n            <div class="card-collection-rank_like">\n                <p>#${e.rank}</p>\n                 <img id = ${e.id} name = 'like' src="./icons/love.png" alt="like"></a>\n            </div>\n    \n        </div>`,n.innerHTML+=i,t()}))})),document.getElementById("top10").addEventListener("click",(n=>{document.getElementById("cards").innerHTML="",e.slice(0,10).forEach((e=>{const n=document.getElementById("cards");let i="";i+=` <div class="card-collection">\n            <div class="card-collection-img">\n                <img src="${e.image}" alt="test">\n            </div>\n    \n            <div class="card-collection-title">\n                <h2>${e.title}</h2>\n            </div>\n            <div class="card-collection-price">\n                <h3>${e.price} BUSD</h3>\n            </div>\n            <div class="card-collection-rank_like">\n                <p>#${e.rank}</p>\n                <img id = ${e.id} name = 'like' src="./icons/love.png" alt="like"></a>\n                </div>\n    \n        </div>`,n.innerHTML+=i,t()}))})),document.getElementById("top20").addEventListener("click",(n=>{document.getElementById("cards").innerHTML="",e.slice(0,20).forEach((e=>{const n=document.getElementById("cards");let i="";i+=` <div class="card-collection">\n            <div class="card-collection-img">\n                <img src="${e.image}" alt="test">\n            </div>\n    \n            <div class="card-collection-title">\n                <h2>${e.title}</h2>\n            </div>\n            <div class="card-collection-price">\n                <h3>${e.price} BUSD</h3>\n            </div>\n            <div class="card-collection-rank_like">\n                <p>#${e.rank}</p>\n                <img id = ${e.id} name = 'like' src="./icons/love.png" alt="like"></a>\n                </div>\n    \n        </div>`,n.innerHTML+=i,t()}))})),document.getElementsByName("like").forEach((e=>{console.log(e),e.addEventListener("click",(e=>{console.log("liked")}))}))})();