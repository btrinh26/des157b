(function() {
    // Initialize AOS 
    AOS.init({
        duration: 2000,
        once: false
    });

    window.addEventListener('load', function () {
        alert("You are a first-year UC Davis student and you don't know much in depth information about cliamte change. You are pretty impartial to climate change: You think it is a real problem, but not a pressing one. You open this informative website to be more informed about the matter. ");
    });
    
    // Array 
    const details = [
        "Carbon levels hit their highest in 3 million years. This traps heat and melts ice caps.",
        "From 2015 to 2022, every year was extremely hot. This caused crop failures and health risks.",
        "Sea ice has dropped by more than 50% since 1980. This makes Earth heat faster."
    ];

    // Wait until the page is fully loaded. this fixed wierd page issues with charts and stuff not loading
    document.addEventListener('DOMContentLoaded', function() {
       const facts = document.querySelectorAll('.expandable');

        for (let i = 0; i < facts.length; i++) {
            let fact = facts[i];                     
            let extraDetail = fact.querySelector('.extra-detail');

            fact.addEventListener('click', function() {
                if (extraDetail.textContent === "") {
                    extraDetail.textContent = details[i];
                    fact.classList.add('expanded');
                } else {
                    extraDetail.textContent = "";
                    fact.classList.remove('expanded');
                }
            });
        }

        // Hover text for emissions list items
        const hoverItems = document.querySelectorAll('#hover-facts li');
        const output = document.getElementById('hover-output');

        for (let i = 0; i < hoverItems.length; i++) {
            let item = hoverItems[i];

            item.addEventListener('mouseover', function() {
                output.textContent = item.textContent + " is a major source of emissions.";
            });

            item.addEventListener('mouseout', function() {
                output.textContent = "Hover over each item to learn more.";
            });
        }

        // Chart.js
        var ctx1 = document.getElementById("myChart1");
        if (ctx1) {
            new Chart(ctx1, {
            type: 'doughnut',
            data: {
                labels: [
                'Energy (33%)',
                'Industry (24%)',
                'Agriculture, Forestry (22%)',
                'Transportation (15%)',
                'Buildings (6%)'
                ],
                datasets: [{
                data: [33, 24, 22, 15, 6],
                backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56', '#4bc0c0', '#9966ff'],
                borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                legend: {
                    position: 'right'
                }
                }
            }
            });
        }

        var ctx2 = document.getElementById("myChart2");
        if (ctx2) {
            new Chart(ctx2, {
            type: 'bar',
            data: {
                labels: ['China', 'United States', 'India', 'EU', 'Russia', 'Japan'],
                datasets: [{
                label: 'Annual GHG Emissions (billion tonnes)',
                data: [11.5, 5.0, 3.3, 2.8, 2.1, 1.1],
                backgroundColor: '#42a5f5'
                }]
            },
            options: {
                responsive: true,
                plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                    label: function(context) {
                        return context.dataset.label + ": " + context.raw + " Gt";
                    }
                    }
                }
                },
                scales: {
                y: {
                    beginAtZero: true,
                    title: {
                    display: true,
                    text: 'GtCO₂e'
                    }
                }
                }
            }
            });
        }
    }); 
})();