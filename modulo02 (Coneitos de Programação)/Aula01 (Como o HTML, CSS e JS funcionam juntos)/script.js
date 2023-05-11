const input = document.querySelector('#input')
const form = document.querySelector('#form')
const list = document.querySelector('#list')

const listData = []

function updatelist() {
    list.innerHTML = listData.map(item => `<li class='listItem'>${item}</li>`).join('')
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    listData.push(input.value)
    input.value = ""
    updatelist()
})

updatelist()