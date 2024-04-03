let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let firstSave = true

function increment() {
    count += 1
    countEl.textContent = count
}

function save() { 
    if (firstSave) {
        saveEl.textContent += count
        firstSave = false
    } else {
        saveEl.textContent += " - " + count
    }

    count = 0
    countEl.textContent = count
}

function clearF() {
    count = 0
    countEl.textContent = count
    saveEl.textContent = "Previous entries: "
 }