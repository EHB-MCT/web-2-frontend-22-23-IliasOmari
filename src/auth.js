const user = sessionStorage.getItem('user')

if (user) {
    const parsed = JSON.parse(sessionStorage.getItem('user'))
    document.getElementById('welcomemessage').textContent = `Welcome to the NFT Universe ${parsed.username}!`
    document.getElementById('nav-like').style.display = "flex"
    document.getElementById('btn-login').style.display = "none"
    document.getElementById('registerbtn').style.display = "none"
    document.getElementById('btn-logout').style.display = "block"
    document.getElementById('changebtn').style.display = "block"

} else {
    document.getElementById('nav-like').style.display = "none"
    document.getElementById('btn-login').style.display = "block"
    document.getElementById('registerbtn').style.display = "block"
    document.getElementById('btn-logout').style.display = "none"
    document.getElementById('changebtn').style.display = "none"
}