/* window.onload = function () {
    invoices = new Array()
    storeOwnerId = sessionStorage.getItem("ID")
    axios.get(`http://localhost:8080/invoice/storeOwner/{storeOwnerId}`)
        .then(function (response) {
            console.log(response)
            for (var i = 0; i < response.data.length; i++) {
                invoice = new Object();
                invoice.id = response.data[i].id
                invoices.push(invoice)
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    invoicesHTML = " "
    for (var i = 0; i < invoices.length; i++) {
        invoicesHTML += '<div class="row shadow p-5 mb-5 bg-body rounded mx-1">' +
                            '<div class="col-lg-2 col-md-2 col-sm-12">' +
                                '<p class="text" id="orderID">#00001</p>' +
                            '</div>'
    }
    document.getElementById("details").innerHTML += invoicesHTML
};  */