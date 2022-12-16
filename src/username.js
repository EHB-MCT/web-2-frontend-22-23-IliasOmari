//button of change username
document.getElementById("btnchange").addEventListener("click", function () {
    document.querySelector(".popup-change-username").style.display = "flex"


})
document.querySelector(".closebtnchange").addEventListener("click", function () {
    document.querySelector(".popup-change-username").style.display = "none"

})


const rgstBtn = document.getElementById('btnchange')
rgstBtn.addEventListener('click', (e) => {
    const username = document.getElementById('userInput').value
    console.log(username)
    const user = JSON.parse(sessionStorage.getItem('user'))

    const newName = {
        username: username,
        uuid: user.uuid,
    }

    sessionStorage.setItem('user', JSON.stringify(newName))
    fetch(`http://localhost:1200/changename?id=${user.uuid}`,{
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
        .then(data => {
            console.log(data)
            if (data.message == 'Your username is succesfully updated !') {
                alert(data.message)

            } else {
                alert("New username is missing")
            }
        })


})