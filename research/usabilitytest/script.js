(function() {
    // Initialize AOS 
    AOS.init({
        duration: 2000,
        once: false
    });

    // waitfor the page load. this fixed wierd page issues with charts and stuff not loading
    document.addEventListener('DOMContentLoaded', function() {

      alert("hey");
      const facts = document.querySelectorAll('.expandable');

      for (let i = 0; i < facts.length; i++) {
        const fact = facts[i];
        const extraDetail = fact.querySelector('.extra-detail');

        fact.addEventListener('click', function() {
          if (extraDetail.textContent === "") {
            if (i === 0) {
              extraDetail.textContent = "Carbon levels hit their highest in 3 million years. This traps heat and melts ice caps.";
            } else if (i === 1) {
              extraDetail.textContent = "From 2015 to 2022, every year was extremely hot. This caused crop failures and health risks.";
            } else if (i === 2) {
              extraDetail.textContent = "Sea ice has dropped by more than 50% since 1980. This makes Earth heat faster.";
            }
            fact.classList.add('expanded');
          } else {
            extraDetail.textContent = "";
            fact.classList.remove('expanded');
          }
        });
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

        // chart.js
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

        var ctx3 = document.getElementById('tempChart').getContext('2d');
        const labels = ['1880', '1900', '1920', '1940', '1960', '1980', '2000', '2020',  '2040', '2060', '2080', '2100'];
        const dataPoints = [0, 0, 0.1, 0.2, 0.3, 0.45, 0.6, 1.1, 1.8, 2.3, 2.6, 2.7];

        const tempChart = new Chart(ctx3, {
          type: 'line',
          data: {
            labels: labels,
            datasets: [{
              label: 'Temperature Anomaly (°C)',
              data: dataPoints,
              fill: false,
              tension: 0.3,
              pointRadius: 5,
              pointHoverRadius: 5,
              pointBackgroundColor: function(context) {
                var i = context.dataIndex;
                if (i <= 7) return 'rgba(214, 40, 40, 1)';
                else return 'rgba(0, 123, 255, 1)';
              },
              pointBorderColor: function(context) {
                var i = context.dataIndex;
                if (i <= 7) return 'rgba(150, 0, 0, 1)';
                else return 'rgba(0, 80, 180, 1)';
              },
              pointHoverBackgroundColor: function(context) {
                var i = context.dataIndex;
                if (i <= 7) return 'rgba(214, 40, 40, 1)';
                else return 'rgba(0, 123, 255, 1)';
              },
              pointHoverBorderColor: function(context) {
                var i = context.dataIndex;
                if (i <= 7) return 'rgba(150, 0, 0, 1)';
                else return 'rgba(0, 80, 180, 1)';
              },
              segment: {
                borderColor: function(count) {
                  var i = count.p0DataIndex;
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
              title: {
                display: true,
                text: 'Global Temperature Anomaly Over Time'
              }
            }
          }
        });

//scroll thing on the temp anom chart
        const textBlocks = document.querySelectorAll('.text-block');

        function onScroll() {
          let closestIndex = 0;
          let closestDistance = window.innerHeight;

          for (let i = 0; i < textBlocks.length; i++) {
            const rect = textBlocks[i].getBoundingClientRect();
            const center = rect.top + rect.height / 2;
            const distance = Math.abs(center - window.innerHeight / 3);

            if (distance < closestDistance) {
              closestDistance = distance;
              closestIndex = i;
            }
          }

          for (let i = 0; i < textBlocks.length; i++) {
            textBlocks[i].classList.remove('active');
            textBlocks[i].classList.remove('future');

            if (i === closestIndex) {
              textBlocks[i].classList.add('active');
              if (i >= 8) {
                textBlocks[i].classList.add('future');
              }
            }
          }

        }

        window.addEventListener('scroll', onScroll);
          onScroll();
  }); 
})(); 