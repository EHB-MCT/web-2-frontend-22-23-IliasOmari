import Swal from 'sweetalert2'

//this code is inspirated from (https://www.youtube.com/watch?v=ptI8g-05VM0&t=3s)

document.getElementById("btnregister").addEventListener("click", function () {
    document.querySelector(".popup-register").style.display = "flex"
})

document.querySelector(".closebtnrgst").addEventListener("click", function () {
    document.querySelector(".popup-register").style.display = "none"
})

//


const rgstBtn = document.getElementById('btnregister')
rgstBtn.addEventListener('click', (e) => {
    const username = document.getElementById('inputUsername').value
    const email = document.getElementById('inputEmail').value
    const password = document.getElementById('inputPassword').value
    const password2 = document.getElementById('inputPassword2').value


    if (password == password2) {

        fetch("http://localhost:1200/register", {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({
                    username: username,
                    email: email,
                    password: password,
                    password2: password2
                })


            })

            .then(res => res.json())
            .then(data => {
                if (data.message == "Your account has been successfully created") {

                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-right',
                        iconColor: 'white',
                        customClass: {
                            popup: 'colored-toast'
                        },
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true

                    })
                    Toast.fire({
                        icon: 'succes',
                        title: data.message,
                    })
                    window.location.href = "login.html"

                } else if (data.message == "Missing username, mail, password") {
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
                        title: data.message,
                    })

                } else if (data.message == "This email is already used") {
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
                        title: data.message,
                    })

                }
            })
    } else {

        const Toast = Swal.mixin({
            toast: true,
            position: 'top-right',
            iconColor: 'white',
            customClass: {
                popup: 'colored-toast'
            },
            showConfirmButton: false,
            timer: 4000,
            timerProgressBar: true

        })

        Toast.fire({
            icon: 'error',
            title: 'you did not enter the same passwords. Please try again',
        })

    }

})