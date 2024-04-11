import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://add-to-cart-18fb4-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const shoppingListEl = document.getElementById("shopping-list")

onValue(shoppingListInDB, function (snapshot) {
    clearShoppingListEl()
    if (snapshot.exists()) {
        let shoppingList = Object.entries(snapshot.val())
    
        shoppingList.forEach(item => {
            appendItemToshoppingListEl(item)
        })
    } else {
        shoppingListEl.innerHTML = "No items here... yet"
    }
})


addButtonEl.addEventListener("click", function () {
    let inputValue = inputFieldEl.value
    
    clearInputFieldEl()
    
    push(shoppingListInDB, inputValue)
})

function clearInputFieldEl() {
    inputFieldEl.value = ""
}
function appendItemToshoppingListEl(item) {
    let newEl = document.createElement("li")

    newEl.textContent = item[1]
    newEl.tabIndex = 0

    newEl.addEventListener("click", function () {
        remove(ref(database, `shoppingList/${item[0]}`))
    })

    shoppingListEl.append(newEl)
}
function clearShoppingListEl() {
    shoppingListEl.innerHTML = ""
}