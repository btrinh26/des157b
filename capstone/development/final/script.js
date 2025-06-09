(function() {
// Initialize AOS 
    AOS.init({
    duration: 2000,
    once: false
    });

    // waitfor the page load. this fixed wierd page issues with charts and stuff not loading
    document.addEventListener('DOMContentLoaded', function() {
        const facts = document.querySelectorAll('.expandable');

        for (let i = 0; i < facts.length; i++) {
            const fact = facts[i];
            const extraDetail = fact.querySelector('.extra-detail');

            fact.addEventListener('click', function() {
                if (extraDetail.textContent === "") {
                    if (i === 0) {
                        extraDetail.textContent = "Carbon levels hit their highest in 3 million years. This is directly caused by humans and our excessive emissions. This traps heat and melts ice caps.";
                    } else if (i === 1) {
                        extraDetail.textContent = "From 2015 to 2022, every year was extremely hot. In fact, they were the hottest years ever recorded by humans. This causes a multitude of problems, from crop failures and health risks.";
                    } else if (i === 2) {
                        extraDetail.textContent = "Sea ice has dropped by more than 50% since 1980. This creates a feedback loop, where less of that white ice can reflect sunlight out, making Earth heat faster.";
                    }
                    fact.classList.add('expanded');
                    } else {
                        extraDetail.textContent = "";
                        fact.classList.remove('expanded');
                    }
                }
            );
        }
        
        // hover txt emissions chart
        const hoverItems = document.querySelectorAll('#hover-facts li');
        const output = document.getElementById('hover-output');

        for (let i = 0; i < hoverItems.length; i++) {
            let item = hoverItems[i];

            item.addEventListener('mouseover', function() {
                output.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
            });

            item.addEventListener('mouseout', function() {
                output.textContent = "Hover over each item to learn more.";
            });
        }

        const ctx3 = document.getElementById('tempChart');
        const labels = ['1880', '1900', '1920', '1940', '1960', '1980', '2000', '2020', '2040', '2060', '2080', '2100'];
        const dataPoints = [0, 0, 0.1, 0.2, 0.3, 0.45, 0.6, 1.1, 1.8, 2.3, 2.6, 2.7];

        // let pointOpacity1 = new Array(labels.length).fill(0.3);
        // let pointOpacity2 = new Array(labels.length).fill(0.3);
        let pointRadiusA = new Array(labels.length).fill(5);

        var anomalyChart = new Chart(ctx3, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Temperature Anomaly (°C)',
                    data: dataPoints,
                    fill: false,
                    tension: 0.3,
                    pointRadius: pointRadiusA,
                    pointHoverRadius: 5,
                    pointBackgroundColor: function(context) {
                        let i = context.dataIndex;
                        if (i <= 7) {
                            return 'rgba(214, 40, 40, 0.3)';
                        } else {
                            return 'rgba(0, 123, 255, 0.3)';
                        }
                    },
                    pointBorderColor: function(context) {
                        let i = context.dataIndex;
                        if (i <= 7) return 'rgba(150, 0, 0, 1)';
                        else return 'rgba(0, 80, 180, 1)';
                    },
                    segment: {
                        borderColor: function(count) {
                            let i = count.p0DataIndex;
                            if (i < 7) return 'rgba(214, 40, 40, 1)';
                            else return 'rgba(0, 123, 255, 1)';
                        }
                    }
                }]
            },
            options: {
                scales: {
                    y: { min: -0.2, max: 3, ticks: { stepSize: 0.5 } },
                    x: {}
                },
                plugins: {
                    legend: { display: false },
                    tooltip: { enabled: false },
        // title: {
        //   display: true,
        //   text: 'Global Temperature Anomaly Over Time'
        // }
            }
            }
        });

        const textBlocks = document.querySelectorAll('.text-block');

        function onScroll() {
            let closestIndex = 0;
            let closestDistance = window.innerHeight;

            for (let i = 0; i < textBlocks.length; i++) {
            let rect = textBlocks[i].getBoundingClientRect();
            let center = rect.top + rect.height / 2;
            let distance = Math.abs(center - window.innerHeight / 3);

            if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = i;
            }
        }

        for (var i = 0; i < textBlocks.length; i++) {
            textBlocks[i].classList.remove('active');
            textBlocks[i].classList.remove('future');

            if (i === closestIndex) {
                textBlocks[i].classList.add('active');
                if (i >= 8) {
                    textBlocks[i].classList.add('future');
                }
            }
        }

        // point radius change
        for (var i = 0; i < labels.length; i++) {
            if (closestIndex < 8 && i === closestIndex + 1) {
                pointRadiusA[i] = 15;
            } else if (closestIndex >= 8 && i === closestIndex) {
                pointRadiusA[i] = 15;
            } else {
                pointRadiusA[i] = 5;
            }
        }

        anomalyChart.update();
        }

        window.addEventListener('scroll', onScroll);
        onScroll();
        
    }); 

})(); 