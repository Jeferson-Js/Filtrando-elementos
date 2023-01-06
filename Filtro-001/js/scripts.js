const filterElement = document.querySelector("#filter")
const cards = document.querySelectorAll(".cards li")

filterElement.addEventListener("input", filterCards)

function filterCards() {
    if(filterElement.value !== "") {
        cards.forEach(card => {
            let title = card.querySelector("h2").textContent.toLowerCase()
            let filterText = filterElement.value.toLowerCase()

            !title.includes(filterText) ? card.style.display = "none" : card.style.display = "block"
        })
    } else {
        cards.forEach(card => {
            card.style.display = "block"
        })
    }
}