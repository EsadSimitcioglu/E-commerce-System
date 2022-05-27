window.onload = function() {
  
    axios.get("http://localhost:8080/customerOrder/date")
        .then(function (response) {
          var xAxis = new Array()
          var yAxis = new Array()
          for(var i =0;i<response.data.length;i++){
            xAxis.push(response.data[i].customerOrderDate)
            yAxis.push(response.data[i].customerOrderProductSize)
          }
  
          const data = {
            labels: xAxis,
            datasets: [{
              label: "Your Store's Performances",
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 205, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(201, 203, 207, 0.2)'
                ],
                borderColor: [
                  'rgb(255, 99, 132)',
                  'rgb(255, 159, 64)',
                  'rgb(255, 205, 86)',
                  'rgb(75, 192, 192)',
                  'rgb(54, 162, 235)',
                  'rgb(153, 102, 255)',
                  'rgb(201, 203, 207)'
                ],
              data: yAxis,
            }]
          };
  
          const config = {
            type: 'bar',
            data: data,
            options: {}
          };
  
          const myChart = new Chart(
            document.getElementById('myChart'),
            config
          );
  
        })
        .catch(function (error) {
          console.log(error);
      });
  };
  
  
  
  
  
  