(function(){
    AOS.init({
        duration: 1000,
        once: false,
        easing: 'ease'
    });
    

    //chartjs for the first chart
    const ctx = document.querySelector('#myChart1');

    new Chart(ctx, {
        type: 'line',
        data: {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [{
            label: 'template1',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 3
        }]
        },
        options: {
            // scales: {
            //     y: {
            //     beginAtZero: true
            //     }
            // }
        }
    });
})();