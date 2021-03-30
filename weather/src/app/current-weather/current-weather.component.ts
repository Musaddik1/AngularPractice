import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../interfaces'

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {

  current:ICurrentWeather
  constructor() { 

    this.current={
      city:"Mumbai",
      country:"India",
      date:new Date(),
      image: 'https://img.icons8.com/fluent-systems-regular/24/000000/snowy-sunny-day.png',
      temprature:72,
      description:"sunny"


    } as ICurrentWeather
  }

  ngOnInit(): void {
  }

}
