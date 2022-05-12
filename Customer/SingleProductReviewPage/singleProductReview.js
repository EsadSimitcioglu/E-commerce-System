window.onload = function () {
    var content
    var customer

    console.log(document.getElementById("comments"))

    var html = "<div class=\"card shadow-0 border\" id=\"comments\" style=\"background-color: #f0f2f5;\"> <div class=\"card-body p-4\"> <div class=\"card mb-4\"><div class=\"card-body\">"
    var commentHtml = "<div class=\"card mb-4\">  <div class=\"card-body\"><p>   "          // </div> </div>

    axios.get(`http://localhost:8080/comments/1`)
        .then(function (response) {
            for(var i = 0; i < response.data.length; i++) {
                content = response.data[i].content
                customer = response.data[i].customer.name
                console.log("Content: " + content)
                console.log("Customer : " + customer)

                commentHtml += content
                commentHtml += "</p><div class=\"d-flex justify-content-between\"><div class=\"d-flex flex-row align-items-center\">  <p class=\"small mb-0 ms-2\">"        // </p>    </div></div>
                commentHtml += customer
                commentHtml += "</p></div></div>"
            }

            commentHtml += "</div></div>"
            html += commentHtml
            html += "</div></div></div></div>"

            document.getElementById("comments").innerHTML = html            

        })
        .catch(function (error) {
            console.log(error)
        })



}
