//txt_search
function getQuery() {
    let searchTerm = document.getElementById("txt_search").value;
    search(searchTerm);
}

function search(searchTerm){
    apikey = "_API_KEY_";
    fetch("https://api.weatherapi.com/v1/current.json"+"?key="+apikey+"&q="+searchTerm).then(res=>res.json()).then(data=>{
        document.getElementById("detail-area").innerHTML=`
 <a class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="${data.current.condition.icon}" alt="">
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${data.location.country +" / "+ data.location.name}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Weather Condition : ${data.current.condition.text}<br>
          Latitude : ${data.location.lat}<br>
          Longitude : ${data.location.lon}<br>
          Current Local time : ${data.location.localtime}<br>
        </p>
    </div>
  </a>
  <a style="margin-top: 1cm;margin-bottom: 1cm;"  class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="stat.jpeg" alt="">
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Weather statics</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Wind Speed (KmPh) : ${data.current.wind_kph}<br>
          Humidity : ${data.current.humidity}<br>
          pressure (millibars) : ${data.current.pressure_mb}<br>
          Tempreture(c) : ${data.current.temp_c}<br>
          Feel like (c) : ${data.current.feelslike_c}<br>
        </p>
    </div>
  </a>
        `
        
    })
}
//get current location
navigator.geolocation.getCurrentPosition(notifyCurrentCoords);
function notifyCurrentCoords(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let searchTerm = lat + "," + lon ;
    search(searchTerm) ;
}
