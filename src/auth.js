//check the session storage


const user = sessionStorage.getItem('user')

if (user) {
    const parsed = JSON.parse(sessionStorage.getItem('user'))
    document.getElementById('welcomemessage').textContent = `Welcome ${parsed.username}!`
    document.getElementById('nav-like').style.display = "flex"

} else {
    document.getElementById('nav-like').style.display = "none"
}