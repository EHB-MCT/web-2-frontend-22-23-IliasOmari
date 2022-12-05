document.getElementById("btnregister").addEventListener("click", function () {
    document.querySelector(".popup-register").style.display = "flex"
})

document.querySelector(".closebtnrgst").addEventListener("click", function () {
    document.querySelector(".popup-register").style.display = "none"
})

const rgstBtn = document.getElementById('btnregister')
rgstBtn.addEventListener('click', (e) => {
    console.log('register')
    const username = document.getElementById('inputUsername').value
    const email = document.getElementById('inputEmail').value
    const password = document.getElementById('inputPassword').value

    console.log(email, password, username)

    fetch("http://localhost:1200/register", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password,
                username: username
            })

        })
        .then(res => res.json())
        .then(data => {
            console.log(data)

            if (data.message == "Your account has been successfully created") {
                alert(data.message)
                window.location.href = "login.html"

            } else if (data.message == "Missing username, mail, password") {
                alert(data.message)

            } else if (data.message == "This email is already used") {
                alert(data.message)


            }
        })


})