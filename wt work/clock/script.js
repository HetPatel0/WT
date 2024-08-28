const btn = document.getElementById('stop');

function showtime() {
    const currentTime = new  Date();
    const time1 = `${currentTime.getHours()} : ${currentTime.getMinutes()} :  ${currentTime.getSeconds()}`

    document.getElementById("time").innerText =time1;   

}
let interval = setInterval(showtime, 1000);

btn.addEventListener('click',()=>{
    clearInterval(interval);
})