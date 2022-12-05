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
    const password2 = document.getElementById('inputPassword2').value

    console.log(email, password, password2, username)

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
    } else {
        alert("you did not enter the same passwords. Please try again")
    }

})