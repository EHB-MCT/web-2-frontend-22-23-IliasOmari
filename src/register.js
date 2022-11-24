document.getElementById("btnregister").addEventListener("click", function () {
    document.querySelector(".popup-register").style.display = "flex"
})

document.querySelector(".closebtnrgst").addEventListener("click", function () {
    document.querySelector(".popup-register").style.display = "none"
})

const rgstBtn = document.getElementById('btnregister')
rgstBtn.addEventListener('click', (e) => {
    console.log('register')
})