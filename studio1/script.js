(function(){
    "use strict"
    console.log('running js');

    const icon1 = document.querySelector('.fa-solid');
    const line1 = document.querySelector('#line1');
    const line2 = document.querySelector('#line2');
    const line3 = document.querySelector('#line3');
    const myVideo = document.querySelector('#video')
    const intervalID = setInterval(checkTime, 1000);

    const poem = {
        start:[1, 6, 12],
        stop:[8, 14, 20],
        line:[line1,line2,line3]
    }

    icon1.addEventListener('click', function(){
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    })

    function checkTime(){
        for (let i=0; i<poem.start.length; i++){
            if (poem.start[i] < myVideo.currentTime && myVideo.currentTime < poem.stop[i]){
                poem.line[i].className = "showing";
            } else {
                poem.line[i].className = "hidden";
            }
        }
    }
})()