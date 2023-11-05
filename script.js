document.getElementById("opennav").addEventListener('click', () => {
    if (document.getElementById("NabBox").classList.contains('up')) {
        document.getElementById("NabBox").classList.remove('up')
    }
    else {
        document.getElementById("NabBox").classList.add('up')
    }
})
document.getElementById("change").addEventListener('click', () => {
    if (document.getElementById("search").classList.contains('search')) {
        document.getElementById("search").classList.remove('search')
        document.getElementById("search").classList.add('searchclose')
    }
    else {
        document.getElementById("search").classList.remove('searchclose')
        document.getElementById("search").classList.add('search')
    }
})
document.getElementById("open").addEventListener("click", () => {
    document.getElementById("search").classList.remove('searchclose')
    document.getElementById("search").classList.add('search')
})