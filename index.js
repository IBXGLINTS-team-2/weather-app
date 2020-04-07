//const URL = 'http://api.openweathermap.org/data/2.5/weather?q=Jakarta,ID&appid=08c63bb12c5a4132f5d570f08f17872d'
<<<<<<< HEAD
// fetch('http://openweathermap.org/img/wn/10d@2x.png')
=======
fetch('http://openweathermap.org/img/wn/10d@2x.png')
>>>>>>> c3ab9fc65f4af4592cdd666e98135ad4f7d2be29
fetch('http://api.openweathermap.org/data/2.5/weather?q=Jakarta,ID&appid=08c63bb12c5a4132f5d570f08f17872d')
    .then(response => {
        return response.json();
    })

    .then(data => {
        console.log(data);
        const {
            id,
            name,
            weather,
            wind,
            main
        } = data;
        const dataCuaca = `
        <div class="col-sm-6 col-md-6">
        <img class="img-cuaca" src ="http://openweathermap.org/img/wn/10d@2x.png"/>
       
       </div>
       <div class="col-sm-6 col-md-6">
       <h1 class="header-cuaca">${weather[0].main}</h1>
       <span class="txt-cuaca">
        id: ${id}
        <br>
        City: ${name}
        <br>
        Wind Speed: ${wind.speed} KM/H
        <br>
        Description: ${weather[0].description}
        <br>
        Temperatur: ${main.temp} Kelvin
        </span>
        <div class="col-sm-6 col-md-6">
        `
        document.getElementById('weather').innerHTML = dataCuaca
    })

