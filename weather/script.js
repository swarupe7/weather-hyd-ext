//https://api.openweathermap.org/data/2.5/weather?q=hyderabad&appid=4e92f38e5da9aa934017303d908c0573


fetch("https://api.openweathermap.org/data/2.5/weather?q=hyderabad&units=metric&appid=4e92f38e5da9aa934017303d908c0573").then(data=>data.json()).then(weatData=>{
    const  main="weather :"+weatData.weather[0].main;
    const wind="wind Speed :"+weatData.wind.speed +"Kmph";
     const tempa="temparature :"+weatData.main.temp  +" @C";
     const humidity="humidity :"+weatData.main.humidity +"%";
    const jokeElement=document.getElementById("temp");
    jokeElement.innerHTML=`${main} \n , ${wind}, \n  ${tempa} ,\n ${humidity}`; 
})