document.getElementById("btn-login").addEventListener("click", function () {
    document.querySelector(".popup").style.display = "flex"


})

document.querySelector(".closebtn").addEventListener("click", function () {
    document.querySelector(".popup").style.display = "none"

})

const logBtn = document.getElementById('logbtn')
logBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const email = document.getElementById('inputEmail').value
    const password = document.getElementById('inputPassword').value
    console.log(email, password)

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
            //creating alerts for the user
            if (result.message == "You are successfully logged in!") {
                sessionStorage.setItem('user', JSON.stringify(result.data))
                alert(result.message)
                window.location.href = "index.html"

            } else if (result.message == "No account with this email! Make sure you register first.") {
                alert(result.message)

            } else if (result.message == " Missing mail, password") {
                alert(result.message)


            } else if (result.message == "Incorrect password for this email") {
                alert(result.message)

            }
        })



})