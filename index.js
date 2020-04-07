//const URL = 'http://api.openweathermap.org/data/2.5/weather?q=Jakarta,ID&appid=08c63bb12c5a4132f5d570f08f17872d'
fetch('http://openweathermap.org/img/wn/10d@2x.png')
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
            wind
        } = data;
        const dataCuaca = `
        <div class="col-sm-12 col-md-12">
        <img class="img-cuaca" src ="http://openweathermap.org/img/wn/10d@2x.png"/>
       <h1 class="header-cuaca">${weather[0].main}<h1>
       <span class="txt-cuaca">
        id: ${id}
        <br>
        city: ${name}
        <br>
        wind speed: ${wind.speed}
        <br>
        description: ${weather[0].description} </span>
        </div>
        `
        document.getElementById('weather').innerHTML = dataCuaca
    })

