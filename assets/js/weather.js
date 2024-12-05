function htmlWeatherWidget (data){
    return `
    
     <div class=" col-12">
      <div class="card p-2">
          <span class="icon"><img class="img-fluid" src="${data.current.condition.icon}"/></span>
          <div class="title"><p>${data.location.name}</p></div>
            <div class="temp">${data.current.temp_f}<sup>&deg;</sup></div>
              <div class="row">
                  <div class="col-4">
                      <div class="header">Sunset</div>
                      <div class="value">${data.forecast.forecastday[0].astro.sunset}</div>
                  </div>
                  <div class="col-4">
                      <div class="header">High Temp</div>
                      <div class="value">${data.forecast.forecastday[0].day.maxtemp_f}&degF</div>
                  </div>
                  <div class="col-4">
                      <div class="header">Low Temp</div>
                      <div class="value">${data.forecast.forecastday[0].day.mintemp_f}&degF</div>
                  </div>
              </div>
              
      </div>
  </div>
    
    `
}

function loadWeather(){
    city = 'Greensburg'
    let url = `http://api.weatherapi.com/v1/forecast.json?key=fda5671ef72e4744b6303645240412&q=${city}&days=1&aqi=no&alerts=no`;

    $('#root').HTML =`loading`
    var xhr = $.get(url)
        
        .done(function(data){
            $('#root').html(htmlWeatherWidget(data))
        })
        .then(function(data){
        //    console.log(data)
        })

}

// document.addEventListener("DOMContentLoaded", loadWeather)

