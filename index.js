// http://api.weatherapi.com/v1/current.json?key=d3463acc87074916844194035252403&q=New Delhi&aqi=no


 const tempField= document.querySelector(".temp");
 const locationField= document.querySelector(".location_time p");
 const dateAndTimeField=document.querySelector(".location_time span")
 const searchField= document.querySelector(".search");
const conditionField= document.querySelector(".condition");
const searchButton=document.querySelector(".search_button")
const iconElement=document.querySelector(".icon")
 

searchButton.addEventListener('click',searchLocation)
let target="New Delhi"

const fetchResult=  async(targetLocation) =>{
  const url=`https://api.weatherapi.com/v1/current.json?key=d3463acc87074916844194035252403&q=${target}&aqi=no`
 const res= await fetch(url);
  
 const data= await res.json();
 console.log(data)

 let temp= data.current.temp_c;
 let location_name= data.location.name;
 let condition= data.current.condition.text;

 let iconUrl = data.current.condition.icon; 
 let local_time=data.location.localtime
 updateDetails(temp, location_name, local_time,iconUrl, condition)

}

function updateDetails(temp, locationName, time, iconUrl, condition){
    let splitDate= time.split(" ")[0];
    let splitTime= time.split(" ")[1];
    let currentDay= getDayName(new Date(splitDate).getDay())
  
  tempField.innerText=`${temp}°C`;
    locationField.innerText=locationName;
    dateAndTimeField.innerText=`${splitDate} ${currentDay} ${splitTime}`;
    conditionField.innerText=condition;
    iconElement.src = `https:${iconUrl}`;
  

}

function searchLocation(e){
     e.preventDefault()

     target= searchField.value;

     fetchResult(target);
}
fetchResult(target);

function getDayName(number){
  switch(number){
    case 0: 
    return "Sunday";

    case 1: 
    return "Monday";

    case 2: 
    return "Tuesday";

    case 3: 
    return "Wednesday";

    case 4: 
    return "Thursday";

    case 5: 
    return "Friday";

    case 6: 
    return "Saturday";
  }
}