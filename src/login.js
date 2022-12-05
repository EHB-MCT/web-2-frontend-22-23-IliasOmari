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
        .then(data => {
            console.log(data)
            if (data.message == "sucessfully logged in !") {
                alert(data.message)
                window.location.href = "index.html"

            } else if (data.message == "No account with this email! Make sure you register first.") {
                alert(data.message)

            } else if (data.message == " Missing mail, password") {
                alert(data.message)


            } else if (data.message == "Enter the correct password for this email") {
                alert(data.message)

            }
        })



})