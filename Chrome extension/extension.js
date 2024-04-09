const saveEl = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

let myLeads = []

saveEl.addEventListener("click", function () {
    myLeads.push(inputEl.value) 
    renderLeads()
    inputEl.value = ""
})

function renderLeads() {
    let listItems = ""
    myLeads.forEach(element => {
        listItems += `
        <li>
            <a href='${element}' target='_blank'>
                 ${element}
            </a>
        </li>`
        
    });
    ulEl.innerHTML = listItems
}

