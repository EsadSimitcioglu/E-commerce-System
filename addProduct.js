function addProduct() {
    let addToBasket = document.getElementById("addToBasket").innerHTML
    let price = document.getElementById("price").innerHTML


    console.log(addToBasket)
    console.log(parseInt(price.substring(2)))


    // let changeImage = document.getElementById("productImage")
    // console.log(changeImage)
    // changeImage = addToBasket
    // document.getElementById("productImage") = addToBasket

    window.location.href = "http://127.0.0.1:5500/shoppingCart.html"

}