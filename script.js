const startDate  = new Date("oct 19 2022 00:00:00").getTime();
const endDate  = new Date("may 01 2026 00:00:00").getTime();

setInterval(() => {
    let now = new Date().getTime();

    // Calculate time passed since the start date
    let passedDistance = now - startDate;
    let passedDays = Math.floor(passedDistance / (1000 * 60 * 60 * 24));
    let passedHrs = Math.floor((passedDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let passedMin = Math.floor((passedDistance % (1000 * 60 * 60)) / (1000 * 60));
    let passedSec = Math.floor((passedDistance % (1000 * 60)) / 1000);

    // Calculate time left until the end date
    let endDistance = endDate - now;
    let endDays = Math.floor(endDistance / (1000 * 60 * 60 * 24));
    let endHrs = Math.floor((endDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let endMin = Math.floor((endDistance % (1000 * 60 * 60)) / (1000 * 60));
    let endSec = Math.floor((endDistance % (1000 * 60)) / 1000);

    // Display the results
    document.getElementById('passedtimer').innerHTML = `${passedDays}d ${passedHrs}h ${passedMin}m ${passedSec}s`;
    document.getElementById('endtimer').innerHTML = `${endDays}d ${endHrs}h ${endMin}m ${endSec}s`;

    // if (Enddistance < 0) {
    //     clearInterval(x);
    //     document.getElementById('endtimer').innerHTML = "Good Bye Friends";
    //     document.getElementsByClassName('title')[0].innerHTML = "";
    //     // document.getElementsByClassName('description').innerHTML = "Good Bye Friends";
    // }


}, 1000);