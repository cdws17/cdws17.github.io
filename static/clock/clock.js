//Gets the current time in hours, minutes, seconds
let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let seconds = document.getElementById("seconds");


setInterval(() => {
    const timeNow = new Date();
    const hr = timeNow.getHours();
    const min = timeNow.getMinutes();
    const sec = timeNow.getSeconds();
    const hrCal = hr*30+min/2;
    const minCal = min * 6;
    const secCal = sec * 6;
    //rotates the hands to show the time on an analog clock
    hour.style.transform = `rotate(${hrCal}deg)`;
    minute.style.transform = `rotate(${minCal}deg)`;
    seconds.style.transform = `rotate(${secCal}deg)`;
}, 100)

function  myFunction(){
    let d=new Date();
    let h=d.getHours();
    let m=d.getMinutes();
    let s=d.getSeconds();
    let day=d.getDay();
    let date=d.getDate();
    let month=d.getMonth();
    let year=d.getFullYear();
    let ampm;

    //finds the current year/month/day
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    month = monthNames[month]
    day=dayNames[day-1];

   if (s<=9){
       s = "0" + s;
   }
   if (m<=9){
       m = "0" + m;
   }
   if (h<=9){
       h = "0" + h;
   }
   //Finds am vs pm
   if (h>=12){
       ampm="pm"
   }
   else{
       ampm="am"
   }
    document.getElementById("demo").innerHTML=h+":"+m+":"+s+" "+ampm+"<br>"+day+"<br>"+month+" "+date+" "+year;
}
setInterval(myFunction,100);



//Gets the location of the user and prints relevant weather information
const getUserLocation = async () => {
    let connection = await fetch('http://ip-api.com/json/');
    if (connection.ok){
        let response = await connection.json(),
            location = `${response.city}, ${response.regionName}, ${response.country}`
        return location;
    }else {
        return false;
    }
}

//Gets the weather information from a website
const getWeatherInfo = () => {
    return getUserLocation().then(async location => {
        if (!location){
            return false;
        }
        let city = location.split(",");
        document.getElementById("location").innerHTML = location;
        let connection = await fetch(`https://api.weatherapi.com/v1/current.json?key=38a5051e7ce6493f86c50549200212&q=${city[0]}`, {cache: "no-cache"});

        if(connection.ok){
            let response = await connection.json(),
                info = response.current;
            return info;
        }else {
            return false;
        }
    });
}

//Prints the temperature/weather information
const printTempInfo = scale => {
    getWeatherInfo().then(info => {
        if (!info){
            return false;
        }
        //Switches between °C and °F by clicking
        const temp = document.getElementById("weather-temp");
        switch (scale){
            default:
            case "c":
                temp.innerHTML = `Temp: ${info.temp_c}°c`;
                temp.title = "Celsius";
                break;
            case "f":
                temp.innerHTML = `Temp: ${info.temp_f}°f`;
                temp.title = "Fahrenheit";
        }

        const humid = document.getElementById("humid");
        humid.innerHTML = `Humidity: ${info.humidity}%`;

        const cloud = document.getElementById("cloud");
        cloud.innerHTML = `Cloud coverage: ${info.cloud}%`;

        const speed = document.getElementById("speed");
        speed.innerHTML = `Wind speed: ${info.wind_mph} mph`;
    })
}

//Prints weather information
const printWeatherInfo = () => {
    getWeatherInfo().then(info =>{
        if (!info){
            return false;
        }
        const icon = document.getElementById("weather-icon"),
              temp = document.getElementById("weather-temp"),
              parent = document.getElementById("weather");

        icon.src = info.condition.icon;
        icon.alt = info.condition.text;
        icon.title = info.condition.text;
        printTempInfo('c');

        icon.addEventListener('load', () => parent.style.display = "flex");
        temp.addEventListener('click', switchTempScale);
    })
}

//Switches between °C and °F
const switchTempScale = () => {
    const temp = document.getElementById("weather-temp");

    temp.title[0] == "C" ? printTempInfo('f') : printTempInfo('c');
}

window.addEventListener("load", () => {
    printWeatherInfo();
})