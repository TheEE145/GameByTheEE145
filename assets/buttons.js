document.querySelector(".modal-btn1").addEventListener("click", function() {
    document.querySelector(".modal-1").setAttribute("data-open", "1")
})

document.querySelector(".close1").addEventListener("click", function() {
    document.querySelector(".modal-1").setAttribute("data-open", "0")
})
