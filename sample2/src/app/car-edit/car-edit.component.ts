import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GiphyService } from '../giphy.service';
import { CarService } from '../shared/car/car.service';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.scss']
})
export class CarEditComponent implements OnInit {

  car:any={};
  sub:Subscription;
  constructor(private route:ActivatedRoute
    ,private router:Router,
    private carservice:CarService,
    private giphyservice:GiphyService) { }

  ngOnInit(): void {

    this.sub=this.route.paramMap.subscribe(params=>{
      const id=params['id'];
      if(id){
        this.carservice.get(id).subscribe((car:any)=>{
          if(car){
            this.car=car
            this.car.href=car._links.self.href;
            this.giphyservice.get(car.name).subscribe(url=>car.giphyUrl=url);
          }else{
            console.log(`Car with id '${id}' not found, returning to list`);
            this.gotoList();

          }
        });
      }
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
  gotoList(){
    this.router.navigate(['/car-list']);
  }
  save(form:NgForm){
    this.carservice.save(form).subscribe(result =>{
      this.gotoList();
    },error=>console.error(error)
    );

  }

  remove(href){
    this.carservice.remove(href)
    .subscribe(resutl =>{
      this.gotoList();
    },error=>console.error(error))
  }
}
