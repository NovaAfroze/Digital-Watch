/*function myTime(){
    var myDate = new Date();
    var hr,min = (myDate.getMinutes()<12) ? "0"+ myDate.getMinutes():myDate.getMinutes();
    sec = (myDate.getSeconds()<10)?"0"+myDate.getSeconds():myDate.getSeconds();
    ampm = (myDate.getHours()<=12)? "AM":"PM";

    if(myDate.getHours()==0){
        hr = 12;
    }
    else if(myDate.getHours()>12){
        hr = myDate.getHours()-12;
    }
    else{
        hr = myDate.getHours();
    }

    var currentTime = hr +":"+ min + ":" + sec + ":";
    document.getElementsByClassName("hour-hand")[0].innerHTML = currentTime;
    document.getElementsByClassName("minute-hand")[0].innerHTML = ampm;
    
    var myDay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    myMonth = ["January","February","March","April","May","June","July","August","September","October","November",
        "December"];

    day = myDate.getDate();
    var currenDate = myDay[myDate.getDay()] + "," + myMonth[myDate.getMonth()] + day ;
    document.getElementsByClassName("second-hand")[0].innerHTML = currenDate;

}

myTime();
setInterval(function(){
    myTime();
},1000);*/



const hour = document.getElementById('hour')
const minute = document.getElementById('minute')
const second = document.getElementById('second')
const day = document.getElementById('day')


var monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]
const clock = setInterval(function time(){
    let today = new Date()
    let d = today.getDate()
    let m = today.getMonth()
    let y = today.getFullYear()
    let h = today.getHours() 
    let min = today.getMinutes()
    let sec = today.getSeconds()


    day.innerHTML = `${d} ${monthName[m]} ${y}`
    hour.textContent = h
    minute.innerText = min
    second.innerText = sec
})
