// init Isotope
var $grid = $('#product-list').isotope({
    // options
  });
  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

  function addBasket(id,name,price){
    var obj = { "id": id, "name": name, "price" : price, "quantity" : 1}
  
    for(var i = 0;i<orderList.length;i++){
      if(orderList[i].id == id){
        orderList[i].quantity++
        sessionStorage.setItem('orderList',JSON.stringify(orderList))
        return
      }
    }
    orderList.push(obj)
    sessionStorage.setItem('orderList',JSON.stringify(orderList))
  }