(()=>{let e=[],t=null;const n={method:"GET",headers:{"X-RapidAPI-Key":"12f64dfb11msh59b48c715183f7dp1926fdjsn4bd22c0cdd56","X-RapidAPI-Host":"binance-nft.p.rapidapi.com"}};function i(){fetch("https://binance-nft.p.rapidapi.com/top-sales/?day=0",n).then((e=>e.json())).then((n=>{e=[],console.log(n.data.list),n.data.list.forEach((t=>{const n=t.title,i=t.coverUrl,s=parseInt(t.price);let c={id:t.nftId,title:n,image:i,price:s};e.push(c)})),t=e,s()}))}function s(){const t=document.getElementById("sales");t.innerHTML="";let n="";e.forEach((e=>{n+=`\n    <div class="card-sales">\n\n        <div class="info-sales">\n            <img src="${e.image}" alt="Moonbird">\n            <h2>${e.title}</h2>\n        </div>\n        <div class="info-sales-price_like">\n            <p>${e.price}$ </p>\n            <img id=${e.id} name = 'like' src="./icons/love.png" alt="like">\n        </div>\n</div>`})),t.innerHTML+=n,document.getElementsByName("like").forEach((t=>{console.log(t),t.addEventListener("click",(t=>{if(sessionStorage.getItem("user")){console.log("like");let n=t.target.id;const i=e.filter((e=>e.id==n));console.log(i[0]);const s=JSON.parse(sessionStorage.getItem("user"));let c={nftId:n,userId:s.uuid,title:i[0].title,img:i[0].image,rank:i[0].rank};fetch("http://localhost:1200/like",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}).then((e=>e.json())).then((e=>alert(e.message)))}else alert("You need to be connected to like.")}))}))}i(),document.getElementById("All").addEventListener("click",(e=>{i()})),document.getElementById("sortExpensive").addEventListener("click",(t=>{console.log("click"),e.sort(((e,t)=>e.price<t.price?1:-1)),s()})),document.getElementById("sortCheap").addEventListener("click",(t=>{console.log("click"),e.sort(((e,t)=>e.price<t.price?-1:1)),s()}));let c=document.getElementsByName("filter");c.forEach((e=>{e.addEventListener("click",(function(){c.forEach((e=>e.classList.remove("active"))),this.classList.add("active")}))}))})();