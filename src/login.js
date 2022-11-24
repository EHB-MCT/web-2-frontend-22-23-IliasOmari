document.getElementById("btn-login").addEventListener("click", function () {
    document.querySelector(".popup").style.display = "flex"
})

document.querySelector(".closebtn").addEventListener("click", function () {
    document.querySelector(".popup").style.display = "none"
})

const logBtn = document.getElementById('logbtn')
logBtn.addEventListener('click', (e) => {
    console.log('login')
})