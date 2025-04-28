(function(){
    "use strict";

    let globalData;
    let numDataPoints;    
    const day = document.querySelectorAll(".dayofweek");
    const date = document.querySelectorAll(".date");
    const duration = document.querySelectorAll(".duration");
    const cards = document.querySelectorAll(".card");
    const popup = document.querySelector('.popup')

    async function getData(){
        const myScreentime = await fetch('data.json');
        const data = await myScreentime.json();
        const dataPoints = Object.keys(data);

        globalData = Object.values(data);
        numDataPoints = dataPoints.length;

        enterData(day, "day");   
        enterData(date, "date"); 
        enterData(duration, "duration"); 
    }

    function enterData(info, jsonInfo) {
        for (let i = 0; i < info.length; i++) {
            info[i].innerHTML = globalData[i][jsonInfo];
        }
    }

    getData();

    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click', function() {
            //console.log("PRESSED")
            alert(globalData[i].alert);
            // popup.innerHTML = `<p>${globalData[i].alert}</p>`;
            // popup.className = 'showing';
        });
    }
})()