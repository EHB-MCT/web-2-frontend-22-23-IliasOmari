document.getElementById("btnchange").addEventListener("click",(function(){document.querySelector(".popup-change-username").style.display="flex"})),document.querySelector(".closebtnchange").addEventListener("click",(function(){document.querySelector(".popup-change-username").style.display="none"})),document.getElementById("btnchange").addEventListener("click",(e=>{const n=document.getElementById("userInput").value;console.log(n);const t=JSON.parse(sessionStorage.getItem("user")),s={username:n,uuid:t.uuid};sessionStorage.setItem("user",JSON.stringify(s)),fetch(`http://localhost:1200/changename?id=${t.uuid}`,{method:"PUT",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify({username:n})}).then((e=>e.json())).then((e=>{console.log(e),"Your username is succesfully updated !"==e.message?alert(e.message):alert("New username is missing")}))}));