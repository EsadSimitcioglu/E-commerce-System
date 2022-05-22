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





    // var commentId
    // console.log("POST EXECUTED")


    // axios.get('http://localhost:8080/comments/max/id')
    //     .then(function(response) {
    //         console.log(response.data)
    //         commentId = response.data   

    //         axios.all([
    //             axios.put(`http://localhost:8080/comments/customer/1/product/1/comment/${commentId - 1}`, {})
    //         ])
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     }
    // );

    // // axios.put('http://localhost:8080/comments/customer/1/product/1/comment/1', {})

    alert("Review was saved")
    // Selected 5 stars

}