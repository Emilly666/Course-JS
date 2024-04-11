const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("save-tab-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

let myLeads = JSON.parse(localStorage.getItem("myLeads"))
if (!myLeads) {
    myLeads = []
}
renderList(myLeads, ulEl)

function renderList(array, element) {
    let listItems = ""
    array.forEach(item => {
        listItems += `
        <li>
            <a href='${item}' target='_blank'>
                 ${item}
            </a>
        </li>`
        
    });
    element.innerHTML = listItems
}

inputBtn.addEventListener("click", function () {
    if (!inputEl.value) {
        return
    }
    myLeads.push(inputEl.value) 
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    renderList(myLeads, ulEl)
})

tabBtn.addEventListener("click", function () {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        renderList(myLeads, ulEl)
    })
})

deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []

    renderList(myLeads, ulEl)
})