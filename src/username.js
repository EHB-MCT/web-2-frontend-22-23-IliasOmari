import Swal from 'sweetalert2'


//this code is inspirated from (https://www.youtube.com/watch?v=ptI8g-05VM0&t=3s)
document.getElementById("btnchange").addEventListener("click", function () {
    document.querySelector(".popup-change-username").style.display = "flex"


})
document.querySelector(".closebtnchange").addEventListener("click", function () {
    document.querySelector(".popup-change-username").style.display = "none"

})
//


const rgstBtn = document.getElementById('btnchange')
rgstBtn.addEventListener('click', (e) => {
    const username = document.getElementById('userInput').value

    const user = JSON.parse(sessionStorage.getItem('user'))

    const newName = {
        username: username,
        uuid: user.uuid,
    }

    sessionStorage.setItem('user', JSON.stringify(newName))
    fetch(`http://localhost:1200/changename?id=${user.uuid}`, {
            method: "PUT",
            headers: {
                'Content-Type': "application/json",
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                username: username,
            })


        })

        .then(res => res.json())
        .then(async data => {
            if (data.message == 'Your username is succesfully updated !') {

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

                await Toast.fire({
                    icon: 'success',
                    title: data.message,
                })
                window.location.href = "index.html"

            } else {
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
                    title: 'New username is missing',
                })
            }
        })
})