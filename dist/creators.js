(()=>{let n=[];const a={method:"GET",headers:{"X-RapidAPI-Key":"704a6c2a6dmsh417c72c7ccdde15p101110jsn4f3606cfc7e9","X-RapidAPI-Host":"binance-nft.p.rapidapi.com"}};function e(){fetch("https://binance-nft.p.rapidapi.com/top-creators/?day=0",a).then((n=>n.json())).then((a=>{n=[],a.data.list.forEach((a=>{let e={name:a.nickName,image:a.avatarUrl,sales:a.salesCount,rank:a.rank,items:a.itemsCount,fans:a.fansCount};n.push(e)})),t()}))}function t(){const a=document.getElementById("creators");a.innerHTML="";let e="";n.forEach((n=>{e+=`  \n        <div class="card-creator">\n       \n                   <div class="card-creator-img">\n                       <img src="${n.image}" alt="creator-img">\n                       <h2>${n.name}</h2>\n       \n                       <div class="card-creator-like">\n                           <img id="like-creator" src="./icons/love.png" alt="like">\n                       </div>\n                   </div>\n       \n           <div class="card-creator-info">\n       \n               <div class="info-1">\n                   <h4>Rank</h4>\n                   <p>${n.rank}</p>\n               </div>\n       \n       \n               <div class="info-2">\n                   <h4>Sales</h4>\n                   <p>${n.sales}</p>\n               </div>\n       \n               <div class="info-3">\n                   <h4>Items</h4>\n                   <p>${n.items}</p>\n               </div>\n       \n               <div class="info-4">\n                   <h4>Fans</h4>\n                   <p>${n.fans}</p>\n               </div>\n       \n           </div>\n       \n       </div>`})),a.innerHTML+=e}e(),document.getElementsByName("filter").forEach((e=>{e.addEventListener("click",(e=>{var i;i=e.target.id,fetch(`https://binance-nft.p.rapidapi.com/top-creators/?day=${i}`,a).then((n=>n.json())).then((a=>{n=[],a.data.list.forEach((a=>{let e={name:a.nickName,image:a.avatarUrl,sales:a.salesCount,rank:a.rank,items:a.itemsCount,fans:a.fansCount};n.push(e)})),t()}))}))})),document.getElementById("All").addEventListener("click",(n=>{e()}));let i=document.getElementsByName("filter");i.forEach((n=>{n.addEventListener("click",(function(){i.forEach((n=>n.classList.remove("active"))),this.classList.add("active")}))}))})();