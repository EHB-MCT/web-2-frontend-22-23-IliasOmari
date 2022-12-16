const user = sessionStorage.getItem('user')

if (user) {
    document.getElementById('nav-like').style.display = "flex"

} else {
    document.getElementById('nav-like').style.display = "none"
}