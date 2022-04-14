import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';
import axios from 'axios';








const Matches = () => {

  const options = {
    method: 'GET',
    url: 'https://livescore-football.p.rapidapi.com/soccer/matches-by-league',
    params: {
      country_code: 'holland',
      league_code: 'eredivisie',
      timezone_utc: '0:00',
      round: '1/16'
    },
    headers: {
      'X-RapidAPI-Host': 'livescore-football.p.rapidapi.com',
      'X-RapidAPI-Key': 'fbac0b7959msh7beff0933d6015ap14a1fdjsn13c088cf77e0'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
  

  return (
      <div>
    <a class="logos5"><div class="logos5">
        <img src="https://www.feyenoord.nl/-/media/images/logos/clubs/slavia-praag-200x200.png?as=0&amp;mh=80&amp;mw=80&amp;hash=68FA4519A19153B552236F87931FBF9A45D4D0B1" 
        alt="Slavia Praha SK logo" class="logos5"/></div> <div class="logos5"><div class="logos5"><div class="logos5"></div> <div class="logos5"></div> <div class="logos5"></div> <div class="logos5"></div></div> <span class="logos5">
                        14 april 2022 21:00
                        
                    </span> <div class="logos5">
                                
                            </div></div> <div class="logos5"><img src="https://www.feyenoord.nl/-/media/images/logos/clubs/_0012_nl-feyenoord.png?as=0&amp;mh=80&amp;mw=80&amp;hash=5A654A4E88EB6D2E93DF7D4C6BD0F0E50AD4302A" alt="Feyenoord logo" class="logos5"/>
                            <Countdown class="counter" date={Date.now() + 37800000} />
                            {options.data}
  
                            </div></a>

                           

                            </div>
  )
}

export default Matches