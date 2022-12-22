import Swal from 'sweetalert2'

//this code is inspirated from (https://www.youtube.com/watch?v=ptI8g-05VM0&t=3s)

document.getElementById("btn-login").addEventListener("click", function () {
    document.querySelector(".popup").style.display = "flex"


})

document.querySelector(".closebtn").addEventListener("click", function () {
    document.querySelector(".popup").style.display = "none"
})
//




const logBtn = document.getElementById('logbtn')
logBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const email = document.getElementById('inputEmail').value
    const password = document.getElementById('inputPassword').value

    fetch("http://localhost:1200/login", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })

        })
        .then(res => res.json())
        .then(result => {

            if (result.message == "You are successfully logged in!") {
                sessionStorage.setItem('user', JSON.stringify(result.data))
                window.location.href = "index.html"

            } else if (result.message == "No account with this email! Make sure you register first.") {

                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-right',
                    iconColor: 'white',
                    customClass: {
                        popup: 'colored-toast'
                    },
                    showConfirmButton: false,
                    timer: 3500,
                    timerProgressBar: true

                })

                Toast.fire({
                    icon: 'error',
                    title: result.message,
                })

            } else if (result.message == " Missing mail, password") {

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
                    icon: 'warning',
                    title: result.message,
                })

            } else if (result.message == "Incorrect password for this email") {
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
                    icon: 'error',
                    title: result.message,
                })

            }
        })



})



const logout = document.getElementById('btn-logout')
logout.addEventListener("click", e => {
    e.preventDefault
    sessionStorage.removeItem('user')
    window.location.href = "./../dist/index.html"
})

const user = sessionStorage.getItem('user')

if (user) {
    document.getElementById('btn-login').style.display = "none"
    document.getElementById('registerbtn').style.display = "none"
    document.getElementById('btn-logout').style.display = "block"
    document.getElementById('changebtn').style.display = "block"
} else {
    document.getElementById('btn-login').style.display = "block"
    document.getElementById('registerbtn').style.display = "block"
    document.getElementById('btn-logout').style.display = "none"
    document.getElementById('changebtn').style.display = "none"
}