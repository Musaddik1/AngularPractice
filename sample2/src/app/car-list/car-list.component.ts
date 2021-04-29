import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../giphy.service';
import { CarService } from '../shared/car/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  constructor(private carservice:CarService,private giphyService:GiphyService) { }

  cars:Array<any>;
  ngOnInit(): void {

    this.carservice.getAll().subscribe(data=>{
      this.cars=data
      for(const car of this.cars){
        this.giphyService.get(car.name)
        .subscribe(url=>car.giphyUrl=url)
      }
    })
  }

}
