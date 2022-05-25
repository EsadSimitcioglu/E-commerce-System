console.log("hello")


var textarea
var review


function onSend() {
    textarea = document.getElementById("textarea").value
    var review

    var radioButton = document.querySelectorAll('input[name="rate"]')
    for(const button of radioButton) {
        if(button.checked) {
            review = button.value
            break;
        }
    }

    console.log(review)


    axios.post('http://localhost:8080/comments', {
        comment: textarea,
        customerId: 1,
        productId: 1,
        review: review
    })



    alert("Review was saved")

}
