let countEL = document.getElementById("count-el")
let counter = 0;
let message = "Previous entries: "
let saveEL = document.getElementById("save-el")

function increament(){
    counter +=1;
    countEL.textContent = counter
}

function save(){
    let saveText = counter + " - "
    //innerText alternative - textContent
    //why alternative - inner text cant not read the spaces
    saveEL.textContent += saveText
    counter = 0
    countEL.textContent = counter
}

function reset(){
    counter = 0
    countEL.textContent = 0
    saveEL.textContent = "Previous entries: "
}












