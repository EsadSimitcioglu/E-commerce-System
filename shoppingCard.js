function decreaseQuantity() {
    let itemQuantity = document.getElementById("itemQuantity").innerHTML
    document.getElementById("itemQuantity").innerHTML = parseInt(itemQuantity) - 1
    console.log(parseInt(itemQuantity) - 1)
}


function increaseQuantity() {
    let itemQuantity = document.getElementById("itemQuantity").innerHTML
    document.getElementById("itemQuantity").innerHTML = parseInt(itemQuantity) + 1
    console.log(parseInt(itemQuantity) + 1)
}