const flight = {
    id: '145c01af48dd00002715248e_0',
    dTimeUTC: '01/26/2021 @ 1:25pm (UTC)',
    aTimeUTC: '01/26/2021 @ 3:45pm (UTC)',
    duration: {
      departure: 8400,
      return: 0,
      total: 8400,
    },
    fly_duration: '2h 20m',
    flyFrom: 'PRG',
    cityFrom: 'Prague',
    cityCodeFrom: 'PRG',
    countryFrom: {
      code: 'CZ',
      name: 'Czechia',
    },
    flyTo: 'BCN',
    cityTo: 'Barcelona',
    cityCodeTo: 'BCN',
    countryTo: {
      code: 'ES',
      name: 'Spain',
    },
    distance: 1359.54,
    airline: 'FR',
    pnr_count: 1,
    technical_stops: 0,
    price: 36,
    bags_price: {
      1: 34.95,
      2: 69.91,
    },
    baglimit: {
      hand_width: 20,
      hand_height: 40,
      hand_length: 55,
      hand_weight: 10,
      hold_width: 81,
      hold_height: 119,
      hold_length: 119,
      hold_dimensions_sum: 319,
      hold_weight: 20,
    },
    availability: {
      seats: 2,
    },
    conversion: {
      EUR: 36,
    },
    quality: 66.66659,
  };

  document.body.innerHTML = "<h1> Základní informace k vašemu letu </h1>";
  document.body.innerHTML += "<br>";
  document.body.innerHTML += "<h3> Trasa letu </h3>";
  document.body.innerHTML += "<p> Startovní země: " + flight.countryFrom.name +"</p>";
  document.body.innerHTML += "<p> Cílová země: " + flight.countryTo.name + "</p>";
  document.body.innerHTML += "<br>";

  const bagsMaxSize = flight.baglimit;

  const maxLimit = {
    width: flight.baglimit.hand_width,
    height: flight.baglimit.hand_height,
    length: flight.baglimit.hand_length
  };
  document.body.innerHTML += "<h3> Rozměry zavazadla</h3>";
  document.body.innerHTML += "<p> Max. šířka zavazadla: " + maxLimit.width + " cm</p>";
  document.body.innerHTML += "<p> Max. výška zavazadla: " + maxLimit.height + " cm</p>";
  document.body.innerHTML += "<p> Max. délka zavazadla: " + maxLimit.length + " cm</p>";
  document.body.innerHTML += "<br>";

  document.body.innerHTML += "<h3> Máte více věcí? Zabalte si i druhý kufr za skvělou cenu!</h3>";
  const priceSecondBag = Math.ceil(flight.bags_price[2] * flight.conversion.EUR);
  document.body.innerHTML += "<p> Cena za druhé zavazadlo: " + priceSecondBag +  " Kč</p>";

    document.body.innerHTML += "<h3> Těšíme se na vaši příští cestu s námi! </h3>";